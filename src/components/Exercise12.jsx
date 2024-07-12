import useForm from './hooks/useForm'

export default function Exercise12() {
  const form = useForm({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={form.handleChange}
         value={form.values.firstName}
       />
 
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={form.handleChange}
         value={form.values.lastName}
       />
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={form.handleChange}
         value={form.values.email}
       />
 
       <button type="submit">Submit</button>
     </form>
  )
}