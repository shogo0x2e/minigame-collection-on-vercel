import DiscordEntry from "@/components/discord-entry";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <DiscordEntry />
      {/* <iframe
        src="/unity/index.html"
        style={{ width: "100%", height: "100%", border: "none" }}
      ></iframe> */}
    </div>
  );
}
