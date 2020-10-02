import React from "react";
import { shallow,configure } from "enzyme";
import App from "./App";
import logo from './logo.svg';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });


describe("<App />",()=>{
    const wrapper =  shallow(<App />)
    it("should render image",()=>{
        const result = wrapper.find("img").prop("src")
        expect(result).toEqual(logo)
    })
    it("should render image",()=>{
        const result = wrapper.find("p").text()
        expect(result).toEqual("Edit src/App.js and save to reload.")
    })
    it("should render text",()=>{
        const result = wrapper.find("a").text()
        expect(result).toBe("Learn React")
    })
    it("should render text",()=>{
        const result = wrapper.find("img").prop("alt")
        expect(result).toBe("logo")
    })
})

