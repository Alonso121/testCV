import { useForm } from "react-hook-form";

const Contact = (props) => {
  const name = props.data.name;
  const street = props.data.address.street;
  const city = props.data.address.city;
  const state = props.data.address.state;
  const zip = props.data.address.zip;
  const phone = props.data.phone;
  const email = props.data.email;
  const message = props.data.contactmessage;

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          {/* <p className="lead">{message}</p> */}
        </div>
      </div>

      <div className="row">
        <div className="ContactForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              ref={register({
                required: "Please enter your name",
                maxLength: {
                  value: 20,
                  message: "Please enter a name with fewer than 20 characters",
                },
              })}
            />
            <br />
            {errors.name && errors.name.message}
            <br />

            <input
              name="email"
              ref={register({
                required: "Please enter an email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <br />
            {errors.email && errors.email.message}
            <br />

            <textarea
              name="comment"
              ref={register({
                required: true,
              })}
            />
            <br />
            {errors.comment && "oops, you forgot your message!"}
            <br />

            <input type="submit" />
          </form>
        </div>

        {data && (
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
};

export default Contact;
