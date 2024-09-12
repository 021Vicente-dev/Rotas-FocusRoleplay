import { useState } from "react";
import lockpick from "../../public/lockpick.png";
import masterpick from "../../public/masterpick.png";
import glock from "../../public/glock.png";
import check from "../../public/chack.gif";
const Rotas = () => {
  // Estado para gerenciar as notificações
  const [notifications, setNotifications] = useState([]);

  // Notify Cobre
  const handleButtonClick = () => {
    const newNotification = "Rota iniciada: LockPick";

    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);

    // notificação 5 segundos
    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1));
    }, 5000);
  };

  // Notify Ferro

  const handleButtonClickF = () => {
    const newNotification = "Rota iniciada: Masterpick";

    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);

    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1));
    }, 5000);
  };

  // Notify Glock
  const handleButtonClickG = () => {
    const newNotification = "Rota iniciada: Glock";

    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);

    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1));
    }, 5000);
  };

  return (
    <div>
      <div className="flex justify-start items-center h-[100vh] ml-5">
        <div className="w-[559px] bg-black rounded-[1.2rem] h-[538px]">
          <div className="ml-[1.6rem] pb-2 pt-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
              >
                <path
                  d="M5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 10 5 16 5 16C5 16 10 10 10 5C10 3.67392 9.47322 2.40215 8.53553 1.46447C7.59785 0.526784 6.32608 0 5 0ZM5 8.063C4.59776 8.063 4.19946 7.98377 3.82784 7.82984C3.45622 7.67591 3.11856 7.45029 2.83413 7.16587C2.54971 6.88144 2.32409 6.54378 2.17016 6.17216C2.01623 5.80054 1.937 5.40224 1.937 5C1.937 4.59776 2.01623 4.19946 2.17016 3.82784C2.32409 3.45622 2.54971 3.11856 2.83413 2.83413C3.11856 2.54971 3.45622 2.32409 3.82784 2.17016C4.19946 2.01623 4.59776 1.937 5 1.937C5.81236 1.937 6.59144 2.25971 7.16587 2.83413C7.74029 3.40856 8.063 4.18764 8.063 5C8.063 5.81236 7.74029 6.59144 7.16587 7.16587C6.59144 7.74029 5.81236 8.063 5 8.063ZM3.063 5C3.063 4.48601 3.26718 3.99307 3.63063 3.62963C3.99407 3.26618 4.48701 3.062 5.001 3.062C5.51499 3.062 6.00793 3.26618 6.37137 3.62963C6.73482 3.99307 6.939 4.48601 6.939 5C6.939 5.51399 6.73482 6.00693 6.37137 6.37037C6.00793 6.73382 5.51499 6.938 5.001 6.938C4.48701 6.938 3.99407 6.73382 3.63063 6.37037C3.26718 6.00693 3.063 5.51399 3.063 5Z"
                  fill="#FF0053"
                />
              </svg>
              <h2 className="text-white font-sora-medium text-[12px] ">Escolha de Rotas</h2>
              
            </div>
          </div>
          <div className="flex justify-center items-center py-5 bg-[#151515] max-w-[522px] ml-[1.2rem] my-3 h-[95px] rounded-[1.2rem] ">
            <img className="pr-3" src={lockpick} alt="LockPick" />
            <div>
              <h1 className="text-white font-sora-bold">LockPick de Cobre</h1>
              <p className="text-white text-[10px] font-sora-extralight font-[400]">
                Rota para produção de LockPick de Cobre
              </p>
            </div>
            <button
              className="ml-16 p-3 w-[131px] h-[44px] text-white font-sora-medium text-[14px] rounded-lg bg-gradient-to-t from-[#FF0053] to-[#FF0053] bg-[#1C1C1C] hover:bg-gradient-to-t hover:from-[#ff0055ad] hover:to-[#ff0055b2] hover:bg-[#424242]"
              onClick={handleButtonClick}
            >
              Iniciar Rota
            </button>
          </div>

          <div className="flex justify-center items-center py-5 bg-[#151515] max-w-[522px] ml-[1.2rem] my-3 h-[95px] rounded-[1.2rem] ">
            <img className="pr-3" src={masterpick} alt="LockPick" />
            <div>
              <h1 className="text-white font-sora-bold">LockPick de Ferro</h1>
              <p className="text-white text-[10px] font-sora-extralight font-[400]">
                Rota para produção de LockPick de Ferro
              </p>
            </div>
            <button
              className="ml-16 p-3 w-[131px] h-[44px] text-white font-sora-medium text-[14px] rounded-lg bg-gradient-to-t from-[#FF0053] to-[#FF0053] bg-[#1C1C1C] hover:bg-gradient-to-t hover:from-[#ff0055ad] hover:to-[#ff0055b2] hover:bg-[#424242]"
              onClick={handleButtonClickF}
            >
              Iniciar Rota
            </button>
          </div>

          <div className="flex justify-start items-center py-5 bg-[#151515] max-w-[522px] ml-[1.2rem] my-3 h-[95px] rounded-[1.2rem]   ">
            <img className="pr-3 ml-5" src={glock} alt="LockPick" />
            <div className="mr-[4.15rem]">
              <h1 className="text-white font-sora-bold">Glock</h1>
              <p className="text-white text-[10px] font-sora-extralight font-[400]">
                Rota para produção de Clok
              </p>
            </div>
            <button
              className="ml-16 p-3 w-[131px] h-[44px] text-white font-sora-medium text-[14px] rounded-lg bg-gradient-to-t from-[#FF0053] to-[#FF0053] bg-[#1C1C1C] hover:bg-gradient-to-t hover:from-[#ff0055ad] hover:to-[#ff0055b2] hover:bg-[#424242]"
              onClick={handleButtonClickG}
            >
              Iniciar Rota
            </button>
          </div>
        </div>
      </div>

      {/* Renderizando as notificações */}
      <div className="fixed  top-16 right-4 space-y-2">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="p-4 bg-[#92faca] text-black rounded-lg shadow-md flex gap-3"
          >
           
           <img className="w-6" src={check} alt="" /> {notification}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rotas;
