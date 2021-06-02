import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";
import Meet from "./Meet";
import ContactList from "./ContactList";
import "./Assistant.css";

const Assistant = () => {
  const [meetList, setMeetList] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const history = useHistory();

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = meetList.filter((meet) => {
        console.log(Object.values(meet));
      });
    }
  };

  useEffect(() => {
    getMeets();
  }, []);

  const getMeets = async () => {
    let obj;
    let list = [];
    const querySnapshot = await db.collection("meets").get();
    querySnapshot.forEach((doc) => {
      obj = doc.data();
      obj.id = doc.id;
      const createAt = new Date(obj.creationDate); // fecha
      const newDate = new Date(); // fecha y hora que ;

      if (list < createAt) {
        list.push(obj);
      }
    });
    setMeetList(list);
  };

  const goPage = () => {
    history.push("/calendar");
  };

  return (
    <div className="container">
      <button className="redireccion" onClick={goPage} />

      <div>
        <ContactList term={searchTerm} searchKeyword={searchHandler} />
      </div>

      {meetList.map((meet) => (
        <Meet
          key={meet.id}
          meet={meet}
          meetList={meetList}
          setMeetList={setMeetList}
        />
      ))}
    </div>
  );
};
export default Assistant;
