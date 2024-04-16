const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="Message"
        />
        <button className="border border-black p-2 m-2 rounded-lg bg-gray-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
