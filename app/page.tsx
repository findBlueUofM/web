'use client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useRouter } from "next/navigation";
import Button from '../components/Button'

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
  router.push('/contact')
}
  return (
    <div>
        Hello world!
    </div>
  );
}
