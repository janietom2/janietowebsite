import * as React from "react"
import { Link } from "gatsby"
import { BsFillPersonFill } from 'react-icons/bs';


import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="Projects" />

    <section className="AboutMe">
    
    <hr></hr>

    
    <h1> 
      <BsFillPersonFill className="iconTitle" /> 
      About Me
    </h1>

    <div className="bodyText">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lorem nulla, luctus vel mi in, rhoncus tincidunt augue. Integer mollis mauris sit amet ipsum elementum, quis porttitor dolor aliquam. Aenean condimentum magna ut arcu faucibus commodo. Donec quam nulla, maximus eget lacus vitae, bibendum congue purus. Quisque ornare pharetra ex vitae interdum. Aenean aliquet sagittis lacinia. Aenean vitae egestas metus. Curabitur non massa eget lorem vestibulum consectetur tempor vel enim. Ut luctus ex in semper imperdiet. Phasellus pellentesque enim nisi, ac venenatis ipsum tristique id. Phasellus sagittis odio eu bibendum gravida. Phasellus odio lectus, euismod id elementum id, vestibulum vel sapien. Maecenas aliquet a neque eu placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eu elit diam. Cras tincidunt mollis nunc, quis vulputate sem finibus ac.

      Maecenas cursus turpis sed lectus hendrerit, non pretium sem ornare. Donec ut ipsum a turpis pulvinar hendrerit eget vel nisi. Suspendisse libero nibh, posuere nec auctor sed, tristique quis mi. Pellentesque euismod dui nisl, ac consectetur arcu sagittis ac. In viverra vestibulum posuere. Vivamus ut nunc sed odio rutrum sodales et nec mauris. Maecenas justo urna, fermentum ac magna quis, lobortis placerat augue. Phasellus sit amet aliquet mi. Nulla vestibulum id purus vel ornare. Morbi ut auctor enim. Vestibulum sit amet gravida diam, sodales tempor justo. Aenean eleifend lectus neque, sit amet convallis lacus sagittis gravida. Nullam euismod ultrices ligula, vitae ultrices lorem faucibus ac. Quisque ornare tellus mollis, volutpat nisi a, tristique libero. Etiam vulputate porta sapien quis rhoncus. Mauris quis vulputate augue.

      Sed odio tortor, porta et ex eu, pharetra eleifend elit. Nunc consequat nisl id neque eleifend, a finibus erat pulvinar. Nam id fringilla felis. Donec consequat eros turpis, ut scelerisque elit egestas et. Vivamus dignissim, lectus in consectetur lobortis, velit erat tristique elit, id elementum ante justo eget magna. Morbi massa nisi, suscipit ut laoreet porttitor, aliquet at ligula. Etiam vestibulum lorem vitae pharetra dapibus. Curabitur in ante ornare, efficitur velit quis, varius turpis. Nunc elementum vitae lacus quis tempor. Fusce suscipit fermentum eros. Pellentesque nec lacus at nisi volutpat cursus vitae quis lacus. Cras sed commodo ligula. Suspendisse tempus erat ac mauris dictum, nec lacinia sem finibus. Ut suscipit lacus nec sapien ultricies hendrerit.
      </p>
    </div>
  </section>
  </Layout>
)

export default About
