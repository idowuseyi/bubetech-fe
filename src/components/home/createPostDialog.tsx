import React from 'react';
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";

interface CreatePostDialogProps {
    open: boolean;
    onClose: () => void;
}

export default function CreatePostDialog({ open, onClose }: CreatePostDialogProps) {
    return (
        <Dialog open={open}>
            <DialogContent>
                <h1>helo</h1>

            </DialogContent>
        </Dialog>
    )
}
