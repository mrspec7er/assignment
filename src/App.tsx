import { useState } from "react";

type DataIndexType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type AspekPenilaianType =
  | "aspek_penilaian_1"
  | "aspek_penilaian_2"
  | "aspek_penilaian_3"
  | "aspek_penilaian_4";

const student: JSX.Element[] = [];

const data = {
  aspek_penilaian_1: {
    mahasiswa_1: 1,
    mahasiswa_2: 1,
    mahasiswa_3: 1,
    mahasiswa_4: 1,
    mahasiswa_5: 1,
    mahasiswa_6: 1,
    mahasiswa_7: 1,
    mahasiswa_8: 1,
    mahasiswa_9: 1,
    mahasiswa_10: 1,
  },
  aspek_penilaian_2: {
    mahasiswa_1: 1,
    mahasiswa_2: 1,
    mahasiswa_3: 1,
    mahasiswa_4: 1,
    mahasiswa_5: 1,
    mahasiswa_6: 1,
    mahasiswa_7: 1,
    mahasiswa_8: 1,
    mahasiswa_9: 1,
    mahasiswa_10: 1,
  },
  aspek_penilaian_3: {
    mahasiswa_1: 1,
    mahasiswa_2: 1,
    mahasiswa_3: 1,
    mahasiswa_4: 1,
    mahasiswa_5: 1,
    mahasiswa_6: 1,
    mahasiswa_7: 1,
    mahasiswa_8: 1,
    mahasiswa_9: 1,
    mahasiswa_10: 1,
  },
  aspek_penilaian_4: {
    mahasiswa_1: 1,
    mahasiswa_2: 1,
    mahasiswa_3: 1,
    mahasiswa_4: 1,
    mahasiswa_5: 1,
    mahasiswa_6: 1,
    mahasiswa_7: 1,
    mahasiswa_8: 1,
    mahasiswa_9: 1,
    mahasiswa_10: 1,
  },
};

function App() {
  const [dataPenilaian, setDataPenilaian] = useState(data);

  function handleUpdateData(
    nilai: number,
    mahasiswa: DataIndexType,
    aspek_penilaian: AspekPenilaianType
  ) {
    const newData = dataPenilaian;
    newData[aspek_penilaian][`mahasiswa_${mahasiswa}`] = nilai;
    setDataPenilaian(newData);
  }

  for (let index = 0; index < 10; index++) {
    const element = (
      <div className="flex w-full gap-2 item-center mb-2">
        <div className="whitespace-nowrap w-1/6 pt-2">
          Mahasiswa {index + 1}
        </div>
        <div className="w-1/6">
          <select
            onChange={(e) =>
              handleUpdateData(
                Number(e.target.value),
                (index + 1) as DataIndexType,
                "aspek_penilaian_1"
              )
            }
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div className="w-1/6">
          <select
            onChange={(e) =>
              handleUpdateData(
                Number(e.target.value),
                (index + 1) as DataIndexType,
                "aspek_penilaian_2"
              )
            }
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div className="w-1/6">
          <select
            onChange={(e) =>
              handleUpdateData(
                Number(e.target.value),
                (index + 1) as DataIndexType,
                "aspek_penilaian_3"
              )
            }
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div className="w-1/6">
          <select
            onChange={(e) =>
              handleUpdateData(
                Number(e.target.value),
                (index + 1) as DataIndexType,
                "aspek_penilaian_4"
              )
            }
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>
    );

    student.push(element);
  }

  function handlePrintPenilaian() {
    console.log(dataPenilaian);
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(dataPenilaian)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  }

  return (
    <div className="overflow-x-auto min-w-[200vw] md:min-w-[120vw] lg:min-w-[85vw] container mx-auto py-12 px-7">
      <div className="flex gap-3 mb-3">
        <p className="w-1/6"></p>
        <p className="w-1/6 text-center">
          <span className="block">Aspek</span>Penilaian 1
        </p>
        <p className="w-1/6 text-center">
          <span className="block">Aspek</span>Penilaian 2
        </p>
        <p className="w-1/6 text-center">
          <span className="block">Aspek</span>Penilaian 3
        </p>
        <p className="w-1/6 text-center">
          <span className="block">Aspek</span>Penilaian 4
        </p>
      </div>
      <div>
        {student.map((i, n) => (
          <div key={n}>{i}</div>
        ))}
      </div>
      <div className="flex justify-end px-52">
        <button
          className="py-2 px-5 tx-xl rounded bg-black text-white mt-7"
          onClick={handlePrintPenilaian}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default App;
