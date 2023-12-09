import PetCard from "@/components/PetCard";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export default function Home({ pets }) {
  return (
    <>
      <Head>
        <title>Petopia</title>
        <meta
          name="description"
          content="Buying commodities is one thing, buying real life cuties is another"
        />
      </Head>
      <main className="main bg-amber-50 py-8">
        <div className="max-w-screen-sm mx-auto grid gap-3">
          {pets.map((p) => (
            <PetCard key={p._id} p={p} />
          ))}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/pets`);
  const pets = await res.data.pets;
  return { props: { pets } };
};
