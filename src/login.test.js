import React from "react";
import { shallow, configure } from "enzyme";
import Login from "./Login";
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe("<Login />", () => {
    const wrapper = shallow(<Login />)
    it("should login when click login button", () => {
        const button = wrapper.find("button")
        button.simulate("click")
        const result = wrapper.state("showvalue")
        expect(result).toEqual(true)
    })
    it("should enter username field", () => {
        const input = wrapper.find({ name: 'username' })
        input.simulate("change", { target: { name: 'username', value: 'username' } })
        const result = wrapper.find('input').at(0).prop('value')
        expect(result).toEqual("username")
    })
    it("should enter username field", () => {
        const input = wrapper.find({ name: 'password' })
        input.simulate("change", { target: { name: 'password', value: 'password' } })
        const result = wrapper.find('input').at(1).prop('value')
        expect(result).toEqual("password")
    })
})