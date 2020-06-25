import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="alert alert-danger">{error}</div>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input
          className="form-control"
          type="text"
          {...input}
          placeholder={`Enter ` + label.toLowerCase()}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="form-group"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="form-group">
          <Field name="title" component={this.renderInput} label="Title" />
        </div>
        <div className="form-group">
          <Field
            name="description"
            component={this.renderInput}
            label="Description"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please enter a title!";
  }
  if (!formValues.description) {
    errors.description = "Please enter a description!";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);

export default formWrapped;
