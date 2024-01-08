import { TopBar } from "../Components";
import "../styles/CSS/utils.css";
import "../styles/CSS/Calculate.css";
import { useState, useEffect } from "react";
import { CountrySelect, Cities } from "../Components";

function Calculate() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [currentCountry, setCurrentCountry] = useState("Afghanistan");
  const [currentCity, setCurrentCity] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [cityError, setCityError] = useState(false);

  //event handlers
  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleLastNameChange = (e: any) => {
    setLastName(e.target.value);
  };
  const handleBirthDateChange = (e: any) => {
    setBirthDate(e.target.value);
  };
  const handleBirthTimeChange = (e: any) => {
    setBirthTime(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(
      name,
      lastName,
      birthDate,
      birthTime,
      currentCountry,
      currentCity,
      pronouns
    );
  };

  useEffect(() => {
    const cityInput = document.getElementById("city");

    if (cityError) {
      cityInput?.classList.add("error-select");
    } else {
      cityInput?.classList.remove("error-select");
    }
  }, [cityError]);
  useEffect(() => {
    const cityInput = document.getElementById("city");
    if (loading) {
      cityInput?.classList.add("loading-input");
    } else {
      cityInput?.classList.remove("loading-input");
    }
  }, [loading]);

  return (
    <div className="containerVh-scroll">
      <TopBar />
      <h1 className="form-title">
        Glad you decided to check it out!
        <br /> Just fill up the form and you will have your results in no time.
      </h1>
      <div className="form-container">
        <div className="form-border">
          <form onSubmit={handleSubmit} className="form-group">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleNameChange}
                type="text"
                name="name"
                id="name"
                className="input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last name</label>
              <input
                onChange={handleLastNameChange}
                type="text"
                name="lastName"
                id="lastName"
                className="input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="birthDate">Date of birth</label>
              <input
                onChange={handleBirthDateChange}
                type="date"
                name="birthDate"
                id="birthDate"
                className="input input-date"
              />
            </div>
            <div className="input-group">
              <label htmlFor="birthTime">Time of birth</label>
              <div className="input-group">
                <input
                  onChange={handleBirthTimeChange}
                  type="time"
                  name="birthTime"
                  id="birthTime"
                  className="input input-date"
                />
                <p className="loading-message">Use the 24hs format</p>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                className="input input-select"
                onChange={(e) => setCurrentCountry(e.target.value)}
                value={currentCountry}
              >
                <CountrySelect />
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="city">City</label>
              <select
                name="city"
                id="city"
                className="input input-select"
                onChange={(e) => setCurrentCity(e.target.value)}
                value={currentCity}
              >
                <Cities
                  cityError={setCityError}
                  country={currentCountry}
                  setLoading={setLoading}
                />
              </select>
              {cityError && (
                <p className="error-message">
                  Seems like we don't have data for that country {":("}
                </p>
              )}
              {loading && (
                <p className="loading-message">
                  looking for some cities {":)"}
                </p>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="pronouns">What are your pronouns?</label>
              <select
                name="pronouns"
                id="pronouns"
                className="input input-select"
                onChange={(e) => setPronouns(e.target.value)}
                value={pronouns}
              >
                <option value="they">They/Them</option>
                <option value="she">She/Her</option>
                <option value="he">He/His</option>
              </select>
            </div>
            <button className="send-button" type="submit">
              continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
