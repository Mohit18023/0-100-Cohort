export function VideoCard(props:any) {
  return (
    <div className="p-3 cursor-pointer">
      <img className="rounded-xl" src={props.image} alt="you-tube-thumbnail" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img
            className="rounded-full w-12 h-12"
            src={props.channelImage}
            alt="you-tube-thumbnail"
          />
        </div>
        <div className="col-span-11 pl-2">
          <h3>{props.title}</h3>
          <p className="text-gray-400 text-base">{props.channel}</p>
          <p className="text-gray-400 text-base">{props.views} | {props.timestamp}</p>
        </div>
      </div>
    </div>
  );
}
