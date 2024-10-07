import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../FormContext";
import FormLayout from "../../layouts/FormLayout";
import SelectForm from "../../components/SelectForm";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import "./index.css";

const BodyInfoPage = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();
  const convertToMetric = () => {
    let weight = formData.bodyInfo.weight;
    let height = formData.bodyInfo.height;

    if (formData.bodyInfo.weightUnit === "lb") {
      weight = (parseFloat(weight) / 2.20462).toFixed(2);
    }

    if (formData.bodyInfo.heightUnit === "in") {
      height = (parseFloat(height) * 2.54).toFixed(2);
    }

    setFormData({
      ...formData,
      bodyInfo: {
        ...formData.bodyInfo,
        weight: weight,
        height: height,
        weightUnit: "kg",
        heightUnit: "cm",
      },
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    convertToMetric();
    navigate("/fitness-goals");
  };

  return (
    <FormLayout>
      <form onSubmit={handleSubmit}>
        <h2>
          Now, let's get to know <span className="highlight">your</span> body...
        </h2>
        <label>What's your current weight?</label>
        <div className="weight">
          <InputForm
            type="number"
            placeholder="Weight"
            value={formData.bodyInfo.weight}
            onChange={(e) =>
              setFormData({
                ...formData,
                bodyInfo: { ...formData.bodyInfo, weight: e.target.value },
              })
            }
          />
          <SelectForm
            options={[
              { name: "lb", id: 1 },
              { name: "kg", id: 2 },
            ]}
            value={formData.bodyInfo.weightUnit}
            onChange={(e) =>
              setFormData({
                ...formData,
                bodyInfo: {
                  ...formData.bodyInfo,
                  weightUnit: e.target.value,
                },
              })
            }
          />
        </div>
        <label>How tall are you?</label>
        <div className="height">
          <InputForm
            type="number"
            placeholder="Height"
            value={formData.bodyInfo.height}
            onChange={(e) =>
              setFormData({
                ...formData,
                bodyInfo: { ...formData.bodyInfo, height: e.target.value },
              })
            }
          />
          <SelectForm
            options={[
              { name: "in", id: 1 },
              { name: "cm", id: 2 },
            ]}
            value={formData.bodyInfo.heightUnit}
            onChange={(e) =>
              setFormData({
                ...formData,
                bodyInfo: {
                  ...formData.bodyInfo,
                  heightUnit: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="sex">
          <SelectForm
            label="What is your sex?"
            value={formData.bodyInfo.sex}
            options={[
              { name: "Male", id: 1 },
              { name: "Female", id: 2 },
            ]}
            onChange={(e) =>
              setFormData({
                ...formData,
                bodyInfo: { ...formData.bodyInfo, sex: e.target.value },
              })
            }
          />
        </div>
        <div className="birthday">
          <InputForm
            label="When is your birthday?"
            type="date"
            value={formData.bodyInfo.birthday}
            onChange={(e) =>
              setFormData({
                ...formData,
                bodyInfo: { ...formData.bodyInfo, birthday: e.target.value },
              })
            }
          ></InputForm>
        </div>

        <Button style="orange">Next: Your Fitness Goals</Button>
      </form>
    </FormLayout>
  );
};

export default BodyInfoPage;
