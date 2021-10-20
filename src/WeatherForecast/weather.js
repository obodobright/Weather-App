import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
const Weather = () => {
  const [text, setText] = useState("");
  const [report, setReport] = useState([]);

  const getWeatherReport = async (text) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=542ffd081e67f4512b705f89d2a611b2`;
    const response = await axios.get(url);
    setReport(response.data);
    console.log(response.data.main.temp);
    console.log(report.main.temp);
    console.log(report.weather.map((ww) => console.log(ww.description)));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getWeatherReport(text);
  };
  const onChangeValue = (e) => {
    setText(e.target.value);
  };
  return (
    <Container>
      <Wrapper>
        <Header>Weather App</Header>
        <WeatherApp>
          <InputComponent>
            <Input placeholder="What is your Location" value={text} onChange={onChangeValue} />
            <SearchButton onClick={onSubmit}>Search</SearchButton>
          </InputComponent>
          <MyWeather>
            <WeatherResult>
              <CityName>{report.name}</CityName>
              {report.weather.map((ww) => (
                <span key={ww.id}>
                  <WeatherReport>{ww.description}</WeatherReport>
                  <WeatherReport>{ww.icon}</WeatherReport>
                </span>
              ))}
            </WeatherResult>
          </MyWeather>
        </WeatherApp>
      </Wrapper>
    </Container>
  );
};

export default Weather;
const MyWeather = styled.div`
  width: 60%;
  height: 50vh;
  background: grey;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchButton = styled.div`
  width: 100px;
  height: 33px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
`;
const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 20px;
`;
const WeatherApp = styled.div`
  width: 100%;
  height: 50vh;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
`;
const CityName = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0;
`;
const WeatherReport = styled.div`
  font-size: 40px;
  font-weight: 600;
`;
const WeatherResult = styled.div``;
const InputComponent = styled.div`
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: blue;
`;
