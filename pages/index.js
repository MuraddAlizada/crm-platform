import React, { useState, useEffect } from "react";
import Header from "@/Components/Header";
import CRMTable from "@/Components/CRMTable";
import NavigationTitle from "@/Components/NavigationTitle";
import AddUserModal from "@/Components/AddUserModal";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Advantages from "@/Components/Advantages";

export default function Home() {
  // Define your initial data
  const initialData = [
    {
      id: 1,
      first_name: "Əli",
      last_name: "Məmmədov",
      email: "ali.m@example.com",
      mobile: "050-123-4567",
      date_of_join: "2024-10-01",
    },
    {
      id: 2,
      first_name: "Leyla",
      last_name: "İsmayılova",
      email: "leyla.i@example.com",
      mobile: "051-234-5678",
      date_of_join: "2024-10-02",
    },
    {
      id: 3,
      first_name: "Rəşad",
      last_name: "Əliyev",
      email: "reshad.a@example.com",
      mobile: "055-345-6789",
      date_of_join: "2024-10-03",
    },
    {
      id: 4,
      first_name: "Gülşən",
      last_name: "Quliyeva",
      email: "gulshen.q@example.com",
      mobile: "070-456-7890",
      date_of_join: "2024-10-04",
    },
    {
      id: 5,
      first_name: "Elvin",
      last_name: "Əhmədov",
      email: "elvin.e@example.com",
      mobile: "077-567-8901",
      date_of_join: "2024-10-05",
    },
    {
      id: 6,
      first_name: "Səidə",
      last_name: "Hüseynova",
      email: "saida.h@example.com",
      mobile: "051-678-9012",
      date_of_join: "2024-10-06",
    },
    {
      id: 7,
      first_name: "Murad",
      last_name: "Səfərov",
      email: "murad.s@example.com",
      mobile: "055-789-0123",
      date_of_join: "2024-10-07",
    },
    {
      id: 8,
      first_name: "Nigar",
      last_name: "Həsənova",
      email: "nigar.h@example.com",
      mobile: "070-890-1234",
      date_of_join: "2024-10-08",
    },
    {
      id: 9,
      first_name: "Anar",
      last_name: "Qəmbərov",
      email: "anar.q@example.com",
      mobile: "077-901-2345",
      date_of_join: "2024-10-09",
    },
    {
      id: 10,
      first_name: "Fərid",
      last_name: "Rəhimov",
      email: "ferid.r@example.com",
      mobile: "051-012-3456",
      date_of_join: "2024-10-10",
    },
    {
      id: 11,
      first_name: "Samir",
      last_name: "Qarayev",
      email: "samir.q@example.com",
      mobile: "050-123-4567",
      date_of_join: "2024-10-11",
    },
    {
      id: 12,
      first_name: "Zeynəb",
      last_name: "İbrahimova",
      email: "zeyneb.i@example.com",
      mobile: "051-234-5678",
      date_of_join: "2024-10-12",
    },
    {
      id: 13,
      first_name: "Aysel",
      last_name: "Əsgərova",
      email: "aysel.e@example.com",
      mobile: "055-345-6789",
      date_of_join: "2024-10-13",
    },
    {
      id: 14,
      first_name: "Kamil",
      last_name: "Ələkbərov",
      email: "kamil.a@example.com",
      mobile: "070-456-7890",
      date_of_join: "2024-10-14",
    },
    {
      id: 15,
      first_name: "Elşən",
      last_name: "Zeynalov",
      email: "elshen.z@example.com",
      mobile: "077-567-8901",
      date_of_join: "2024-10-15",
    },
    {
      id: 16,
      first_name: "Süleyman",
      last_name: "Orucov",
      email: "suleyman.o@example.com",
      mobile: "051-678-9012",
      date_of_join: "2024-10-16",
    },
    {
      id: 17,
      first_name: "Nərmin",
      last_name: "Babayev",
      email: "nermin.b@example.com",
      mobile: "055-789-0123",
      date_of_join: "2024-10-17",
    },
    {
      id: 18,
      first_name: "Kamran",
      last_name: "Hacıyev",
      email: "kamran.h@example.com",
      mobile: "070-890-1234",
      date_of_join: "2024-10-18",
    },
    {
      id: 19,
      first_name: "Aynur",
      last_name: "Rzayeva",
      email: "aynur.r@example.com",
      mobile: "077-901-2345",
      date_of_join: "2024-10-19",
    },
    {
      id: 20,
      first_name: "Orxan",
      last_name: "Bayramov",
      email: "orxan.b@example.com",
      mobile: "051-012-3456",
      date_of_join: "2024-10-20",
    },
    {
      id: 21,
      first_name: "Rəna",
      last_name: "Şərifova",
      email: "rena.s@example.com",
      mobile: "050-123-4567",
      date_of_join: "2024-10-21",
    },
    {
      id: 22,
      first_name: "Fidan",
      last_name: "Nağıyeva",
      email: "fidan.n@example.com",
      mobile: "051-234-5678",
      date_of_join: "2024-10-22",
    },
    {
      id: 23,
      first_name: "Turan",
      last_name: "Rüstəmov",
      email: "turan.r@example.com",
      mobile: "055-345-6789",
      date_of_join: "2024-10-23",
    },
    {
      id: 24,
      first_name: "Günel",
      last_name: "Süleymanova",
      email: "gunel.s@example.com",
      mobile: "070-456-7890",
      date_of_join: "2024-10-24",
    },
    {
      id: 25,
      first_name: "Elnur",
      last_name: "İsgəndərov",
      email: "elnur.i@example.com",
      mobile: "077-567-8901",
      date_of_join: "2024-10-25",
    },
    {
      id: 26,
      first_name: "Şahin",
      last_name: "Hacıyev",
      email: "shahin.h@example.com",
      mobile: "051-678-9012",
      date_of_join: "2024-10-26",
    },
    {
      id: 27,
      first_name: "Aytən",
      last_name: "Qasımova",
      email: "ayten.q@example.com",
      mobile: "055-789-0123",
      date_of_join: "2024-10-27",
    },
    {
      id: 28,
      first_name: "Kamilla",
      last_name: "Hüseynli",
      email: "kamilla.h@example.com",
      mobile: "070-890-1234",
      date_of_join: "2024-10-28",
    },
    {
      id: 29,
      first_name: "Elgün",
      last_name: "Əliyev",
      email: "elgun.e@example.com",
      mobile: "077-901-2345",
      date_of_join: "2024-10-29",
    },
    {
      id: 30,
      first_name: "Şəbnəm",
      last_name: "İsmayılova",
      email: "shebnem.i@example.com",
      mobile: "051-012-3456",
      date_of_join: "2024-10-30",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedUsers, setAddedUsers] = useState([]);

  // Load added users from localStorage on component mount
  useEffect(() => {
    const storedAddedUsers =
      JSON.parse(localStorage.getItem("addedUsers")) || [];
    setAddedUsers(storedAddedUsers);
  }, []);

  // Save added users to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("addedUsers", JSON.stringify(addedUsers));
  }, [addedUsers]);

  // Open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Add a new user
  const handleAddUser = (newUser) => {
    setAddedUsers((prevAddedUsers) => [newUser, ...prevAddedUsers]);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle deleting a user (only affects addedUsers)
  const handleDeleteUser = (id) => {
    setAddedUsers((prevAddedUsers) =>
      prevAddedUsers.filter((user) => user.id !== id)
    );
  };

  // Combine addedUsers with initialData for display
  const combinedUsers = [...addedUsers, ...initialData];

  return (
    <>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="crm-table" className="h-14"></section>
      <NavigationTitle onAddUser={handleOpenModal} />
      <CRMTable
        users={combinedUsers}
        addedUsers={addedUsers}
        onDeleteUser={handleDeleteUser}
      />
      <AddUserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddUser={handleAddUser}
      />
      <section id="advantages">
        <Advantages />
      </section>
      <Footer />
    </>
  );
}
