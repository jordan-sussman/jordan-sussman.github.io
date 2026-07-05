---
layout: post
title: "Oh Good You're Here"
---

Do you remember when AOL AIM would make a door sound when leaving or entering? It felt special even though it was just the sound of a door. When looking back at this era of the internet, it stands out due to little details like these.

Today there are entire software platforms on the web, and those platforms are missing that sort of character. One of the easiest, and most rewarding ways to counter this is to add user presence into the mix. This can be baked into just about any web application, and it can be a great way to add some character to your application. While it's not pure 'collaboration', it's a great way to nudge you that you're not alone or just a passive participant. This looks like a user avatar, an online status, or a person's name; nothing complicated. This is made easy with the help of websockets, but especially with React and Elixir Phoenix Channels.

The value is so useful that I created a small repo for React + Elixir users who want to add user presence to their web apps, via a `usePresence` React hook. It makes implementation a breeze:


```typescript
import { usePresence } from "phoenix-presence-react";

function OnlineUsers({
  userId,
  userName,
}: {
  userId: string;
  userName: string;
}) {
  const { presence, isJoined } = usePresence({
    topic: "presence:lobby",
    params: { token: "user-token" }, // params passed to your Elixir channel's join/3
  });

  return (
    <div>
      <div className={isJoined ? "status-online" : "status-connecting"} />
      {presence.map((user) => (
        <Avatar
          key={user.id}
          name={user.name} // 'name' comes from metadata tracked in Elixir
        />
      ))}
    </div>
  );
}
```

Check it out here - https://github.com/jordan-sussman/phoenix-presence-react

Defining topics, or rooms, is the fun part. You can assign these to general entities or each entity's unique identifier, making rooms unique and incredibly useful. Instead of having these be based on routing or the 'current view', you're able to transcend that and bake user presence into every part of your application. It can be as simple as adding a defined component like the above throughout your application in the JSX like the following:

```jsx
  <LiveUsers entity={entity.type} entityId={entity.id} />
```

Here, you can base a room off a specific entity's unique identifier or you can omit it and use just the entity type as a room for locations like a directory list view, for instance.
That's it though, just one line and you get user presence into whatever component or view you like. The rest from there is up to you. The unforgettable AOL AIM sound could work its way back into the modern day web app in new ways; we just have to remember to utilize websockets again in what is both something useful and creative.
