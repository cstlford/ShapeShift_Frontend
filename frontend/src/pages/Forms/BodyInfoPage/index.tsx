import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "../../../contexts/UserInfoContext";
import FormLayout from "../../../layouts/FormLayout";
import SelectForm from "../../../components/SelectForm";
import Button from "../../../components/Button";
import InputForm from "../../../components/InputForm";
import "./index.css";

const BodyInfoPage = () => {
  const navigate = useNavigate();
  const { userInfoData, setUserInfoData } = useUserInfoContext();
  const convertToMetric = () => {
    let weight = userInfoData.body_info.weight;
    let height = userInfoData.body_info.height;

    if (userInfoData.body_info.weight_unit === "lb") {
      weight = (parseFloat(weight) / 2.20462).toFixed(2);
    }

    if (userInfoData.body_info.height_unit === "in") {
      height = (parseFloat(height) * 2.54).toFixed(2);
    }

    setUserInfoData({
      ...userInfoData,
      body_info: {
        ...userInfoData.body_info,
        weight: weight,
        height: height,
        weight_unit: "kg",
        height_unit: "cm",
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
            value={userInfoData.body_info.weight}
            onChange={(e) =>
              setUserInfoData({
                ...userInfoData,
                body_info: {
                  ...userInfoData.body_info,
                  weight: e.target.value,
                },
              })
            }
          />
          <SelectForm
            options={[
              { name: "lb", id: 1 },
              { name: "kg", id: 2 },
            ]}
            value={userInfoData.body_info.weight_unit}
            onChange={(e) =>
              setUserInfoData({
                ...userInfoData,
                body_info: {
                  ...userInfoData.body_info,
                  weight_unit: e.target.value,
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
            value={userInfoData.body_info.height}
            onChange={(e) =>
              setUserInfoData({
                ...userInfoData,
                body_info: {
                  ...userInfoData.body_info,
                  height: e.target.value,
                },
              })
            }
          />
          <SelectForm
            options={[
              { name: "in", id: 1 },
              { name: "cm", id: 2 },
            ]}
            value={userInfoData.body_info.height_unit}
            onChange={(e) =>
              setUserInfoData({
                ...userInfoData,
                body_info: {
                  ...userInfoData.body_info,
                  height_unit: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="sex">
          <SelectForm
            label="What is your sex?"
            value={userInfoData.body_info.sex}
            options={[
              { name: "Male", id: "Male" },
              { name: "Female", id: "Female" },
            ]}
            onChange={(e) =>
              setUserInfoData({
                ...userInfoData,
                body_info: { ...userInfoData.body_info, sex: e.target.value },
              })
            }
          />
        </div>
        <div className="birthday">
          <InputForm
            label="When is your birthday?"
            type="date"
            value={userInfoData.body_info.birthday}
            onChange={(e) =>
              setUserInfoData({
                ...userInfoData,
                body_info: {
                  ...userInfoData.body_info,
                  birthday: e.target.value,
                },
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
