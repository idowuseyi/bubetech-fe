"use client";
import { useState } from "react";
import Post from "../components/home/Post";
import Connect from "../components/home/connect";
import WeatherCard from "../components/cards/WeatherCard";
import CreatePost from "../components/home/createPost";
import CreatePostDialog from "../components/home/createPostDialog";

export default function Home() {
    const [showPostDialog, setShowPostDialog] = useState(false)
    return (
        <>
            <main className="flex flex-col md:flex-row w-full min-w-0 gap-5">
                <div className="w-full min-w-0 gap-5 flex flex-col">
                    <WeatherCard />
                    <CreatePost handleShowCreateDialog={() => setShowPostDialog(true)} />
                    <Post />
                </div>
                <Connect />
            </main>
            <CreatePostDialog
                open={showPostDialog}
                onClose={() => setShowPostDialog(false)}

            />
        </>
    )
}