import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DiscardListingProps {
  open: boolean;
  onClose: () => void;
  setOpenDiscardListingDialog: any;
  setOpenListingDialog: any;
}

export default function DiscardListing({ open, onClose, setOpenListingDialog, setOpenDiscardListingDialog }: DiscardListingProps) {
  return (
    <Dialog open={open}>
      <DialogContent className="flex flex-col gap- w-full max-w-[450px]">
        <div className="flex flex-col w-full max-w-[260px] mx-auto">
          <h2 className="text-base font-medium text-[#323232] text-center">
            Discard Listing
          </h2>

          <p className="text-center font-medium text-base text-[#323232]">Are you sure you want to discard
            this listing?</p>
        </div>


        <div className="flex w-full gap-4 max-w-[324px] mx-auto">
          <Button
            className="border border-[#6FA521] rounded-md mt-10 w-1/2 h-12 px-3.5 py-2.5 text-sm bg-transparent font-medium text-[#6FA521] shadow-sm"
            type="button"
            onClick={onClose}
          >
            <span className="text-base font-medium" >Yes</span>
          </Button>
          <Button
            className="bg-[#6FA521] rounded-md mt-10 w-1/2 h-12 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm"
            type="button"
            onClick={() => {
              setOpenListingDialog(true);
              setOpenDiscardListingDialog(false)
            }}
          >
            <span className="text-base font-medium">No</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
