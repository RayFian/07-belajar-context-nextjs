"use client";
import MainPage from "@/components/templates/main_page";
import ProfilePage from "@/components/templates/profile_page";
import { use } from "react";

export default function Home(){
  return(
    <> 
      <MainPage/>
      <hr/>
      <ProfilePage/>
    </>
  );
}