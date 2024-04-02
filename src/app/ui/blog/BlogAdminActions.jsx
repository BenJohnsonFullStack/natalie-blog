"use client";
import { useState } from "react";
import Link from "next/link";
import { EditIcon, DeleteIcon } from ".";
import { Confirmation } from "..";

export const BlogAdminActions = ({ user, blog }) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const toggleConfirming = () => {
    setIsConfirming((prev) => !prev);
  };
  return (
    <>
      {user.type === "admin" && (
        <div className="flex justify-end gap-3">
          <Link href={`/edit/${blog.id}`}>
            <EditIcon />
          </Link>
          <div className="relative">
            {isConfirming && (
              <Confirmation toggleConfirming={toggleConfirming} />
            )}
            <DeleteIcon toggleConfirming={toggleConfirming} />
          </div>
        </div>
      )}
    </>
  );
};
