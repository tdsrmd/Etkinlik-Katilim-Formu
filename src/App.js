import React, { useState } from "react";
import axios from "axios";
import githubLogo from "./githubLogo.png";
import baykuzLogo from "./baykuz.svg";
import instagramLogo from "./instagram.png";
import Alert from "./components/Alert";
import bolumler from "./bolumler";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("0");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);
  const [warning, setWarning] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const addGuest = (e) => {
    e.preventDefault();
    setLoadingButton(true);

    if (!firstName || !lastName || !department || !phoneNumber) {
      setLoadingButton(false);
      setSuccess(false);
      setDanger(true);
      setWarning(false);
    } else {
      axios
        .post(
          "URL",
          {
            firstName: firstName,
            lastName: lastName,
            department: department,
            class: category,
            phoneNumber: phoneNumber,
          }
        )
        .then((response) => {
          setLoadingButton(false);
          setSuccess(true);
          setDanger(false);
          setWarning(false);
          setFirstName("");
          setLastName("");
          setDepartment("");
          setCategory("0");
          setPhoneNumber("");
        })
        .catch((err) => {
          setLoadingButton(false);
          setSuccess(false);
          setDanger(false);
          setWarning(true);
        });
    }
  };

  return (
    <div className="container-fluid bg-light">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-sm-12 col-md-10 col-lg-9  col-xl-7 col-xxl-6">
          <form>
            <div className="row text-center mb-3">
              <div className="col mt-3">
                <img src={githubLogo} className="mb-3" alt="github logo" />
                <h1 className="mb-2 fs-2">
                  S??f??rdan Orta Seviye Github E??itim
                </h1>
                <p>
                  Ki??i say??s??na g??re yer ayarlanaca????ndan ??t??r?? e??er e??itime
                  kat??lamayacaksan??z l??tfen formu doldurmay??n??z!
                </p>
              </div>
            </div>
            <div className="col">
              {success ? (
                <Alert
                  status="success"
                  content="Ba??ar??l?? bir ??ekilde kay??t oldunuz!"
                  info="22 Mart Sal?? | 17:00'da g??r??????r??z."
                />
              ) : null}
              {danger ? (
                <Alert
                  status="danger"
                  content="L??tfen t??m alanlar?? doldurunuz!"
                />
              ) : null}
              {warning ? (
                <Alert status="warning" content="Daha ??nce kay??t oldunuz!" />
              ) : null}
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    className="form-control"
                    placeholder="text"
                  />
                  <label htmlFor="floatingInput">??sim</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    className="form-control"
                    placeholder="text"
                  />
                  <label htmlFor="floatingPassword">Soyisim</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
                type="text"
                className="form-control"
                placeholder="number"
                list="departmentName"
              />
              <label htmlFor="floatingPassword">B??l??m</label>
              <datalist id="departmentName">
                {bolumler.map((cat) => {
                  return <option value={cat} />;
                })}
              </datalist>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="form-select"
                    id="floatingSelectGrid"
                    aria-label="Floating label select example"
                  >
                    <option value="0">Haz??rl??k</option>
                    <option value="1">1.S??n??f</option>
                    <option value="2">2.S??n??f</option>
                    <option value="3">3.S??n??f</option>
                    <option value="4">4.S??n??f</option>
                    <option value="5">Mezun</option>
                  </select>
                  <label htmlFor="floatingSelectGrid">S??n??f</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    type="number"
                    className="form-control"
                    placeholder="number"
                  />
                  <label htmlFor="floatingPassword">Telefon Numaras??</label>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col mb-3">
                <button
                  type="submit"
                  disabled={loadingButton}
                  className={`btn w-100  ${
                    loadingButton ? "btn-primary" : "btn-secondary"
                  }`}
                  onClick={addGuest}
                >
                  {loadingButton ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    "G??nder"
                  )}
                </button>
              </div>
            </div>
          </form>
          <div className="row d-flex flex-column align-items-center text-center">
            <div className="col">
              <img
                src={baykuzLogo}
                alt="baykuz logo"
                style={{ width: "20px" }}
              />
            </div>
            <div className="col">
              <p className="mb-0">
                Yeni etkinlikleri ve payla??t??????m??z yararl?? i??erikleri g??rebilmek
                i??in
              </p>
              <p className="mt-0">
                bizi
                <a href="https://www.instagram.com/bay.kuz" target="_blank">
                  &nbsp;instagram&nbsp;
                </a>
                'dan takip edebilirsiniz.
              </p>
              <a href="https://www.instagram.com/bay.kuz" target="_blank">
                {" "}
                <img src={instagramLogo} alt="instagram logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
