import { useState } from "react";

const CORRECT_PASSWORD_HASH = 'ad698ac9653d25d2b386629439da8331d1cd01e59eeee63b9bf46e5e9803d383';

export interface BlackIsClosedProps {
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

export function BlackIsClosed({ setClicks }: BlackIsClosedProps) {
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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#292827', 
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        backgroundColor: '#4d4b47',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 40px 8px rgba(.5, 0.5, 0.5, 0.54)',
        textAlign: 'center',
        width: '80%',
        maxWidth: '600px'
      }}>
        <h1>Didn't you hear me?</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Now get out of here bub, else your'll be counting to ten with your toes
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ display: 'block', margin: '10px auto', padding: '10px', width: '95%' }}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {isPasswordCorrect === false && <p>What did I say bub, get out of here before we do more then talk</p>}
      </div>
    </div>
  );
}
