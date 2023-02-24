import { useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputField from "../comps/input-Field";
import Textarea from "@mui/joy/Textarea";
import IconBtn from "../comps/icon-button";
import MyButton from "../comps/button";
import MyDropzone from "../comps/dropzone";
import closeIcon from "../assets/icons/close.png";
import reopenIcon from "../assets/icons/reopen.png";
import BasicSelect from "../comps/dropdown";
import Switch from "@mui/material/Switch";
import { useFormik } from "formik";
import formikOptions from "../services/maintenance-request";

export default function MaintenReqPage() {
  const [priority, setPriority] = useState("");
  const [technician, setTechnician] = useState("");
  const [date, setDate] = useState(null);
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [critical, setCritical] = useState(false);
  const formik = useFormik(formikOptions());

  return (
    <div className="flex flex-col gap-5 p-6 md:p-10">
      <div className="flex flex-row justify-between md:justify-start md:gap-5">
        <div className="flex flex-col gap-0">
          <p className="text-grey">created by</p>
          <p className="text-primary text-xl">Ahmad Wehbe</p>
        </div>
        <div>
          <p className="text-grey">created at</p>
          <p className="text-primary text-xl">23/2/23 10:37PM</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:gap-0">
        <div className="flex gap-5 align-top md:h-full">
          <div className="flex flex-col">
            <p className="text-primary font-inter text-2xl md:text-3xl">
              BPL Cardiart 7108
            </p>
            <p className="text-grey text-base md:text-lg">
              #TCKT-20230223-ABC123
            </p>
          </div>
          <div className="bg-green-200 text-primary rounded-3xl h-full px-4 pt-1 pb-2 ">
            open
          </div>
        </div>

        <div className="flex flex-row gap-5 md:h-full">
          <IconBtn
            icon={closeIcon}
            text="Close"
            classes="bg-danger"
            onClick={() => {
              console.log("close ticket");
            }}
          />
          <IconBtn
            icon={reopenIcon}
            text="Reopen"
            classes="bg-success"
            onClick={() => {
              console.log("reopen ticket");
            }}
          />
        </div>
      </div>

      <hr />

      <div className="flex flex-col w-64">
        <div className="flex justify-between">
          <p className="text-primary text-xl text-start">Safety Issue?</p>
          <Switch
            onChange={() => {
              if (critical) {
                setCritical(false);
                setPriority("Low");
              } else {
                setCritical(true);
                setPriority("Critical");
              }
            }}
            label="Safety"
          />
        </div>
        <p className="text-grey text-base text-start">
          will set work order priority to critical
        </p>
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:gap-5 md:justify-between">
        <InputField
          title="Priority *"
          subtitle="Tickets with higher priority will be handled faster"
          input={
            <BasicSelect
              value={priority}
              setValue={setPriority}
              options={["Low", "Medium", "Critical"]}
            />
          }
        />

        <InputField
          title="Technician *"
          subtitle="Please make sure to choose the right technician"
          input={
            <BasicSelect
              value={technician}
              setValue={setTechnician}
              options={[
                "Medical Laboratory Technician",
                "Radiologic Technologist",
                "EKG Technician",
                "Phlebotomist",
              ]}
            />
          }
        />
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col gap-5 md:flex-row md:w-full">
          <InputField
            title="ETTC *"
            subtitle="Estimated time to complete"
            justifyElems="justify-start"
            input={
              <TextField
                id="ettc"
                name="ettc"
                value={formik.values.ettc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                error={formik.touched.ettc && formik.errors.ettc}
                helperText={formik.errors.ettc}
              />
            }
          />
          <InputField
            title="Est. Hours *"
            subtitle="Estimated hours for the job"
            justifyElems="justify-start"
            input={
              <TextField
                id="estHours"
                name="estHours"
                value={formik.values.estHours}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                error={formik.touched.estHours && formik.errors.estHours}
                helperText={
                  formik.touched.estHours && formik.errors.estHours
                    ? formik.errors.estHours
                    : ""
                }
              />
            }
          />
        </div>
        <InputField
          title="Due Date *"
          subtitle="The day on which this job should be done before"
          justifyElems="justify-start"
          input={
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Pick Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          }
        />
      </div>

      <InputField
        title="Brief Issue Description *"
        subtitle="One sentence that describes the issue. 120 chars max."
        input={
          <div>
            <Textarea
              id="desc"
              name="desc"
              minRows={1}
              maxRows={5}
              value={formik.values.desc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.desc && formik.errors.desc ? true : false}
            />
            <p className="text-danger text-sm">{formik.errors.desc}</p>
          </div>
        }
      />

      <InputField
        title="Issue Details *"
        subtitle="Provide as much details of the issue as you can"
        input={
          <div>
            <Textarea
              id="details"
              name="details"
              minRows={5}
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.details && formik.errors.details ? true : false
              }
            />
          </div>
        }
      />

      <InputField
        title="Equipment condition"
        subtitle="Provide clear images of the equipment"
        input={
          <MyDropzone
            files={files}
            setFiles={setFiles}
            setImageUrls={setImageUrls}
            imageUrls={imageUrls}
          />
        }
      />
      <MyButton
        text="Save"
        classes="bg-success"
        onClick={() => {
          formik.handleSubmit();
        }}
        disabled={
          priority === "" ||
          technician === "" ||
          formik.values.ettc === "" ||
          formik.values.estHours === "" ||
          date === null ||
          formik.values.desc === "" ||
          formik.values.details === "" ||
          files.length === 0
        }
      />
    </div>
  );
}
