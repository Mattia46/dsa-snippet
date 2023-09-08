export const MoreInfo = ({ content }) => {
  const [reason, setReason] = useState('');

  const onSubmit = () => {
    // Post appeal and update the status
  };

  const policies = fetch.get(`${BASE_URL}/getPolicies/id/${content.id}`)

  return (
    <form onSubmit={onSubmit}>
      <div>

        {/* Block to xplain why the content has been taken down */}
        <div className="my-4">
          Your content has been taken down goes against our community guidelines
        </div>
        {/* Render the content */}
        {policies} {/* Show the violated policies */}


        {/* Block to add appeal reason */}
        <div className="my-4">
          You may proceed to appeal internally now. Alternatively, you have the
          right to make an application to out-of-court decision body under the
          Digital Services Act.
        </div>
        <div>
          <label>Explain why you want to appeal</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="h-32 w-full rounded-lg border-2 p-4"
          />
        </div>

        <button
          type="submit"
          className="mr-4 rounded bg-blue-600 px-4 py-2 text-blue-100 hover:bg-blue-500"
        >
          Appeal
        </button>
      </div>
    </form>
  );
};
