import iconAjuda from '../../assets/ajuda.png';
import iconAoVivo from '../../assets/ao-vivo.png';
import iconConfig from '../../assets/config.png';
import { default as iconCursos, default as iconSeusCursos } from '../../assets/cursos.png';
import iconDenuncias from '../../assets/denuncias.png';
import iconEmAlta from '../../assets/em-alta.png';
import iconEsportes from '../../assets/esporte.png';
import iconFeedback from '../../assets/feedback.png';
import iconFimes from '../../assets/filmes.png';
import iconHistorico from '../../assets/historico.png';
import iconHome from '../../assets/home.png';
import iconInscricoes from '../../assets/inscriçoes.png';
import iconJogos from '../../assets/jogos.png';
import iconKids from '../../assets/kids.png';
import iconLikes from '../../assets/like.png';
import iconMaisTarde from '../../assets/mais-tarde.png';
import iconMusic from '../../assets/music.png';
import iconNoticias from '../../assets/naticias.png';
import iconPlaylist from '../../assets/playlost.png';
import iconPodcast from '../../assets/podcast.png';
import iconPremiun from '../../assets/premiun.png';
import iconSeusVideos from '../../assets/seus-videos.png';
import iconShopping from '../../assets/shop.png';
import iconShorts from '../../assets/shorts.png';
import iconStudio from '../../assets/studio.png';

export interface Iitems {
  icon: string;
  text: string;
  link: string;
}

export const items = [
  {icon: iconHome, text: 'Inicio', link:'/' },
  {icon: iconShorts, text: 'Shorts' },
  {icon: iconInscricoes, text: 'Inscrições' },
  {icon: iconHistorico, text: 'Historico', link:'/history' },
  {icon: iconPlaylist, text: 'Playlists' },
  {icon: iconSeusVideos, text: 'Seus Videos', link:'/library' },
  {icon: iconSeusCursos, text: 'Seu Cursos' },
  {icon: iconMaisTarde, text: 'Assistir mais tarde' },
  {icon: iconLikes, text: 'Gostei' },
  {icon: iconEmAlta, text: 'Em Alta' },
  {icon: iconShopping, text: 'Shopping' },
  {icon: iconFimes, text: 'Musicas' },
  {icon: iconAoVivo, text: 'Ao Vivo' },
  {icon: iconJogos, text: 'Jogos' },
  {icon: iconNoticias, text: 'Noticias' },
  {icon: iconEsportes, text: 'Esportes' },
  {icon: iconCursos, text: 'Cursos' },
  {icon: iconPodcast, text: 'Podcasts' },
  {icon: iconPremiun, text: 'Youtube Premium' },
  {icon: iconStudio, text: 'Youtube Studio' },
  {icon: iconMusic, text: 'Youtube Music' },
  {icon: iconKids, text: 'Youtube Kids' },
  {icon: iconConfig, text: 'Configurações' },
  {icon: iconDenuncias, text: 'Historico de denuncias' },
  {icon: iconAjuda, text: 'Ajuda' },
  {icon: iconFeedback, text: 'Enviar Feedback' }
]
