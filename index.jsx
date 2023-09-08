const DialogModal = ({ isOpened, content }) => {
  // this is dialog. The parent should handle the state to show or hide it
  if (!isOpened) return null;

  return (
    <div className="absolute z-50 flex h-full w-full justify-center bg-slate-900/80">
      <div className="absolute z-50 flex w-full flex-col divide-y-2 rounded-lg bg-white p-8 shadow-lg md:mt-48 md:w-1/2">

        {content?.contentViolating && (<MoreInfo content={content} />)}

        {content?.appealResponse === "overturned" && <Accepted content={content} />}

        {content?.appealResponse === "uphold" && (<Denied content={content} />)}
      </div>
    </div>
  );
};

export { DialogModal };
