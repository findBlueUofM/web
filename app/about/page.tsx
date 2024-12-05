'use client';
import { useRouter } from "next/navigation";
import Navbar from '../../components/Navbar';
import styles from './about.module.css';
import BackHandIcon from '@mui/icons-material/BackHand';

export default function About() {
  const router = useRouter();
  const handleContactClick = () => {
    router.push('/contact');
  };
  return (
    <div className="about-page">
      <Navbar />
      <div className={styles["about-header-title"]}>
        <h2>Who are we? <BackHandIcon fontSize="inherit"/></h2>
      </div>
      <div className={styles["about-us"]}>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Odio finibus dictum sapien aenean tortor. Magna vehicula accumsan nulla enim morbi nam montes. Taciti nulla dolor mi litora sed dignissim viverra. Justo nec malesuada nisl litora vulputate ut et pulvinar vitae. Magnis netus torquent habitant iaculis consequat; nullam penatibus. Maximus ultricies congue justo maecenas massa; in pretium. Class rhoncus dignissim porttitor inceptos felis.

Ultricies curabitur sociosqu urna dui aliquet suspendisse nullam. Curae dictum aliquam ipsum efficitur mi viverra morbi cursus? Augue lacinia pretium tincidunt iaculis posuere. Sapien habitasse sed rhoncus sollicitudin nostra penatibus mattis. Arcu risus id commodo non a sagittis. Tristique dui eu facilisi ante egestas sagittis rutrum imperdiet.

Justo mus natoque hac vestibulum dignissim. Nunc ultricies aenean iaculis nostra proin interdum nulla tempus. Iaculis tempor mus; augue pharetra fusce sociosqu faucibus. Volutpat sagittis fusce suspendisse arcu tellus, aliquet consequat nam. Efficitur aliquam vehicula imperdiet sapien purus aenean curabitur. Lorem placerat purus libero viverra purus nullam. Rutrum nec non pharetra rutrum habitant facilisi ante fermentum. Rhoncus elementum duis adipiscing; lacinia mauris phasellus.

Feugiat mauris mi vestibulum ullamcorper turpis mi quis netus. Diam gravida parturient elit sit senectus phasellus senectus. Fermentum mollis adipiscing ligula sapien neque sed. Nascetur maximus sollicitudin sociosqu et sodales. Dictumst nisi facilisi in feugiat ultricies ut donec viverra? Per maximus lobortis ipsum nulla potenti dis cursus curae. Justo mi nam dis volutpat convallis vivamus pharetra enim eros.

Inceptos ultrices erat suspendisse cursus ante tincidunt dictum mollis. Tristique ex suscipit sem efficitur nec quam consectetur auctor eleifend. Magnis integer in; fusce adipiscing bibendum placerat per eget. Ultrices maecenas dapibus eleifend nibh ullamcorper elementum quisque. Dolor vivamus urna ac nisi arcu maecenas sagittis. Per et vel ligula purus, rhoncus consequat eros. Gravida sapien lacinia accumsan, fringilla fringilla tempus. Etiam ultricies mauris libero elementum donec bibendum nostra quis.</p>
      </div>
    </div>
  )}

