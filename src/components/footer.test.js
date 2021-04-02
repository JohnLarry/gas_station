import React from "react";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";
import   Footer    from "./footer";

describe("test footer component",()=>{
	it("check the text in h5 tag", ()=>{
		const wrapper = shallow(<Footer/>);
		const text = wrapper.find('h5').text();
		const text1 = wrapper.find('h4').text();
		expect(text).toEqual("Haykpo");
		expect(text1).toEqual("Products");

	});

	it("check if snapshot match",()=>{

		const tree = renderer.create(<Footer/>).toJSON();
		expect(tree).toMatchSnapshot();
	});


});