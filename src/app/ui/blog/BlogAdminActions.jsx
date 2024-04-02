"use client";
import { useState } from "react";
import Link from "next/link";
import { EditIcon, DeleteIcon } from ".";
import { Confirmation } from "..";

export const BlogAdminActions = ({ user, blog }) => {
  console.log(user.type);
  const [isConfirming, setIsConfirming] = useState(true);
  return (
    <>
      {user.type === "admin" && (
        <div className="flex justify-end gap-2">
          <Link href={`/edit/${blog.id}`}>
            <EditIcon />
          </Link>
          <div className="relative">
            {isConfirming && <Confirmation />}
            <DeleteIcon />
          </div>
        </div>
      )}
    </>
  );
};
