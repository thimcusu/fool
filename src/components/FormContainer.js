import React from 'react';

import Input from './presentational/Input';
import  '../styles/form.css';
class FormContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            // isShow:true,
            header_title:""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        // this.setState((prevState)=>({ header_title:event.target.value }));
        this.setState({header_title:event.target.value});
        console.log("qqq");
    }

    render(){
        const {header_title} = this.state;
        return (
            <div id="form">  
                <div className="header">Hello World</div>
                <Input
                    text="Header title"
                    label="header_title"
                    type="text"
                    id="header_title"
                    value={header_title}
                    handleChange={this.handleChange}
                />
                {/* <AweSomeInput/> */}
            </div>
        );
    }
}

export default FormContainer;

