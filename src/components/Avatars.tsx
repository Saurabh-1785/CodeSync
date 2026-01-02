import { useOthers, useSelf } from "@liveblocks/react/suspense";

export function Avatars() {
    const users = useOthers();
    const currentUser = useSelf();

    return (
        <div className="flex px-3">
            {users.map(({ connectionId, info }) => {
                return (
                    <Avatar key={connectionId} picture={info.picture} name={info.name} />
                );
            })}

            {currentUser && (
                <div className="relative ml-8 first:ml-0">
                    <Avatar
                        picture={currentUser.info.picture}
                        name={currentUser.info.name}
                    />
                </div>
            )}
        </div>
    );
}

export function Avatar({ picture, name }: { picture: string; name: string }) {
    return (
        <div className="group flex place-content-center relative border-4 border-white rounded-full w-[42px] h-[42px] bg-gray-400 -ml-3 first:ml-0">
            <img
                src={picture}
                alt={name}
                className="w-full h-full rounded-full"
            />
            {/* Tooltip */}
            <span className="absolute top-full mt-2.5 px-2.5 py-1.5 bg-black text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10 pointer-events-none">
                {name}
            </span>
        </div>
    );
}