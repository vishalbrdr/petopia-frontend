import Link from "next/link";
import React from "react";

export default function PetCard({ p }) {
  return (
    <div
      key={p._id}
      className="h-44 bg-white flex border rounded-lg overflow-hidden shadow-sm "
    >
      <div className="w-64 h-full">
        <img
          src={p.images[0]}
          className="h-full w-full object-cover object-center"
          alt={p.name}
        />
      </div>
      <div className="px-2 py-2">
        <p className="text-lg">
          <strong>{p.name}</strong> a <em>{p.breed}</em>
        </p>
        <p>{p.description}</p>
        <p>₹{p.price}</p>
        <Link
          href={`/pets/${p._id}`}
          className="border-2 text-amber-600 px-3 py-1 rounded border-amber-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
