import { useState } from "react";

const CORRECT_PASSWORD_HASH = 'ad698ac9653d25d2b386629439da8331d1cd01e59eeee63b9bf46e5e9803d383';

export interface MarketIsClosedProps {
  setClicks: (value: number) => void;
}

async function hashString(text: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text); // Convert the text to an ArrayBuffer
  const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Hash the data with SHA-256
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // Convert bytes to hex string
  return hashHex;
}

export function MarketIsClosed({ setClicks }: MarketIsClosedProps) {
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean | null>(
    null
  );

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    hashString(password).then((passwordHash) => {
      console.group(`Hash for ${password} is`);
      console.log(passwordHash);
      console.groupEnd();
      if (passwordHash === CORRECT_PASSWORD_HASH) {
        setIsPasswordCorrect(true);
        setClicks(0); // Reset clicks if the password is correct
      } else {
        setIsPasswordCorrect(false);
      }  
    });
  };

  return (
    <div>
      <h1>Market is Closed</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isPasswordCorrect === false && <p>Password is incorrect. Try again.</p>}
    </div>
  );
}
