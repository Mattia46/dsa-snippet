export const Accepted = () => (
  <>
    <div className="mb-4 w-72 text-3xl md:w-full">
      Your content has been determined as safe
    </div>
    <div className="mb-4 grow pt-4 text-lg">
      <div className="flex justify-center p-8 text-6xl">✅</div>
      <div>
        We have reviewed your appeal and it does not go against our Community
        Guidelines. We are sorry for the misunderstanding, we have restored your
        content and removed the strike from your profile.
      </div>
      {/* Block to show the content */}
    </div>
  </>
);

export const Denied = () => (
  <>
    <div className="mb-4 w-72 text-3xl md:w-full">
      Your content has been confirmed as unsafe
    </div>
    <div className="mb-4 grow pt-4 text-lg">
      <div className="flex justify-center p-8 text-6xl">❌</div>
      <div>
        We have reviewed you appeal and uphold the decision that it goes against
        our Community Guidelines. The content remains marked as unsafe and the
        strike is upheld against your account. A total of 3 strikes will result
        in your account being suspended.
      </div>
      {/* Block to show the content */}
    </div>
  </>
);
