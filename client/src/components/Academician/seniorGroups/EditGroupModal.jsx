/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import api from "../../../utils/Request";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

const ModalComponent = ({ onClose, isOpen, group }) => {
  const { token } = useAuth();
  const admin = sessionStorage.getItem("admin");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const [title, setTitle] = useState(group.title);
  const [students, setStudents] = useState([]);
  const [studentSearch, setStudentSearch] = useState("");
  const [studentsToAdd, setStudentsToAdd] = useState([...group.students]);

  const handleStudentAddition = (id) => {
    setStudentsToAdd([...studentsToAdd, id]);
  };

  const handleStudentRemove = (id) => {
    setStudentsToAdd(studentsToAdd.filter((student) => student !== id));
  };
  const handleStudentSearch = (search) => {
    setStudentSearch(search);
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get(
          `/senior/lecturer/students?search=${studentSearch}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data) setStudents(response.data.students);
      } catch (error) {
        console.log(error.message);
      } finally {
        //setIsLoaded(false);
      }
    };
    fetchStudents();
  }, [token, studentSearch]);
  const handleSendData = async () => {
    let studentIds = [];
    studentIds.push(...studentsToAdd.map((student) => student._id));

    setLoading(true);
    try {
      const response = await api.put(
        `/senior/update/${group._id}`,
        { title: title, students: studentIds }, // Pass FormData instead of an object
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Assuming the data you want is in the response's 'data' field
      console.log("Response data:", response.data);
      if (response.status >= 200 && response.status < 300) {
        setResponseMessage("Group edited successfully!"); // Set success message
      } else {
        setResponseMessage("An error occurred."); // Set error message
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal backdrop={"blur"} size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <div className="font-semibold font-serif">
          <ModalHeader className="flex flex-col gap-1">
            <h2 className="text-3xl">Edit Group</h2>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-2 text-2xl  capitalize border-t-2 border-gray-200  min-h-[600px]">
              <label htmlFor="groupTitle" className="text-blue-700">
                Group Title
              </label>
              <input
                id="groupTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter group title"
                className="outline-none rounded-lg border-1 border-gray-300 px-2 py-2"
                readOnly={false}
              />
              <h2 className="text-blue-700">Existing Students</h2>
              <div className=" p-1 border-1 rounded-lg border-gray-300">
                {studentsToAdd.map((student) => {
                  return (
                    <span
                      key={student._id}
                      className=" hover:bg-blue-100  rounded-lg py-1 px-2 duration-150 border-b-1 border-gray-200 flex flex-row justify-between "
                    >
                      <div className="flex flex-col">
                        <h1>
                          {student.firstName} {student.lastName}
                        </h1>
                        <p className="text-sm">{student.registerNo}</p>
                      </div>
                      {!studentsToAdd.includes(student) ? (
                        <div
                          className="flex items-center cursor-pointer text-green-500 "
                          onClick={() => handleStudentAddition(student)}
                        >
                          {" "}
                          <IoAddCircleOutline size={32} />
                        </div>
                      ) : (
                        <div
                          className="flex items-center cursor-pointer text-red-500 "
                          onClick={() => handleStudentRemove(student)}
                        >
                          {" "}
                          <IoRemoveCircleOutline size={32} />
                        </div>
                      )}
                    </span>
                  );
                })}
              </div>

              <div className="flex flex-row justify-evenly mt-8">
                <div className="w-full border-t-2 border-gray-200 flex flex-row-reverse justify-evenly  mt-4">
                  <div className="flex flex-col justify-center gap-2 w-full">
                    <h1 className=" text-blue-700">Student List</h1>
                    <div className=" md:min-h-[400px] overflow-y-auto md:max-h-[400px] border-2 border-gray-300 min-w-[300px] md:min-w-[400px] rounded-lg p-2 flex flex-col gap-2 font-mono text-black">
                      <input
                        type="search"
                        placeholder="Search student"
                        onChange={(e) => handleStudentSearch(e.target.value)}
                        className="outline-none rounded-lg py-2 px-2 border-1 border-gray-300 placeholder:text-md placeholder:font-mono"
                      />

                      {students
                        .filter(
                          (student) =>
                            !studentsToAdd.some((s) => s._id === student._id)
                        )
                        .map((student) => (
                          <span
                            key={student._id}
                            className="hover:bg-blue-100 rounded-lg py-1 px-2 duration-150 border-b-1 border-gray-200 flex flex-row justify-between"
                          >
                            <div className="flex flex-col">
                              <h1>
                                {student.firstName} {student.lastName}
                              </h1>
                              <p className="text-sm">{student.registerNo}</p>
                            </div>
                            <div
                              className="flex items-center cursor-pointer text-green-500"
                              onClick={() => handleStudentAddition(student)}
                            >
                              <IoAddCircleOutline size={32} />
                            </div>
                          </span>
                        ))}
                    </div>
                    {responseMessage && (
                      <p className=" text-green-500">{responseMessage}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button
              onClick={handleSendData}
              color="primary"
              isDisabled={!title}
            >
              Submit
            </Button>
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
