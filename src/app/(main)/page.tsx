"use client";
import { useState } from "react";
import Connect from "@/app/components/home/connect";
import CreatePost from "@/app/components/home/create-post";
import Post from "@/app/components/home/post";
import CreatePostDialog from "@/app/components/home/createPostDialog";

export default function Home() {
    const [showPostDialog, setShowPostDialog] = useState(false)
    return (
        <>
            <main className="flex w-full min-w-0 gap-5">
                <div className="w-full min-w-0 space-y-5">
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