import React, { Component } from 'react';
import WeatherDiv from './components/WeatherDiv';
import Footer from './components/Footer';
import ActivityCards from './components/ActivityCards';
import BtnFilter from './components/BtnFilter';
import BtnLogin from './components/BtnLogin';
import BtnFavorite from './components/BtnFavorite';
import Logo from './components/Logo';
import Contact from './components/Contact';
import ModalofContact from './components/ModalofContact';

import './components/WeatherDiv';
import './components/Logo.css';
import './components/BtnNavBar.scss';
import './App.css';
import './components/ModalofContact.css';
import './components/ModalofContact';



class App extends Component {
  render() {
    return (
    <div> 
        <header className="App-header">
          <BtnFilter />
          <BtnLogin />  
          <BtnFavorite />

        <div className="l"><Logo /></div> 

        </header>
    </div> 
    );
  }

    state = {
        weatherData: [],
        lo: true,
    }

    getWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=e8fc88dd5f1edd7f7ff6a9a5be06bd83')
            .then(res => res.json())
            .then(res => this.setState({ weatherData: res, lo: false }))
        // .then(res => this.state.lo ? console.log("pipi")
        // : console.log('totototo',this.state.weatherData.weather[0]))
    }
    
    componentDidMount() {
        this.getWeather()
    }
    
    render() {
        
        if (this.state.lo) {
            return (<div>loading</div>)
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <BtnFilter />
                        <BtnLogin />
                        <BtnFavorite />
                    </header>
                    
                    <WeatherDiv weatherData={this.state.weatherData} />

                    <div className="cardactivity">
                        <ActivityCards
                            photo="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFRUWGBcYFxcXGBYXGBgYFRgXGBcXFRcYHSggGholHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR8tLS0tKy0tLS0rLS0tKy0tLS0tLS0tLS0tKy0tLS0tLS0tLS03LS0tNystKzcrKysrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABAEAABAwIDBQUHAgQEBgMAAAABAAIRAyEEMUEFElFhcQYTIoGhFDKRscHR8FLhByNC8RVTYnIzNEOistIWF4L/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EACQRAAICAgMAAgIDAQAAAAAAAAABAhEhMQMSQQRRE3EiYYEU/9oADAMBAAIRAxEAPwD1R9UBcF7YSZ1QkrW8eKZRG7B7611MC7OUraVM2qVnEyYWcW4KVuPKBldAoUNYwbtFSs2g1KZ5LlwWow+biWnVShwVcNSLqDEbTLQXF0AZmUVGwNpFqJSHa/aqhQO7O+/9LfqclRtudqKtTwhxYwcCQXdeSqr68nOV1cfx7zI55c3kS/4v+ITv6KQH+4z8kEe3laZhnTd/dUo1Oqzf5LoXDx/RP8ky/YXtq0/8akDzbb0Ks+zK+HriaVS+o1HkV42KgU+HxTmHeY4gjUEgqcvjReho8zWz2l2Bdo4HqhauDf8ApB6KmbD7avbDK0uH6puOvFXahtIOAcDIORGS458bg8o6YzUtANSkBm0hcHDtOqae1g5hcOq0zm0JLGaFRwnNQVMMQmryzSyi7sHVG2I0mKnMhYU0fhZ1CHdgim7BoDCxTuoEZha3EbFo4AW2LpoC6ACYxzvrSl3eixAxItLHBahZaMdhdNcVFKzeQYUGNldjJAiqV0MQUrQ1hl1w4ocVypO8QozaOcSLKidodqyd1pkDIaTxKsXazafd0YHvPsOmp/OK8yx+NDRc35rp4UkrZDkbbpE1WtqShauNa3Va2XsyvijMFjOOp6K6bN7HYVoG+3edxcZWn8pLCHj8dsop2q3S/RbG07ZH4Feo/wCBYdoEMETyXTsPQYD4B8ApP5bKf8yPLhtBvFE0q4OquuPwWDeLtbPqq5juyzAC6iXNPO4Tx+X9iy+P9A9OorP2U2qWk0ybHLqqF7Q+m7u6og8dDzCb4HFQQ4G4MrpclyxObq4SPUxiOK678IXA4ttWmHRci8cdVtwAXC1To67tBW+OK6KAJ4Fdsc5CgBd1Gajhqo+8csNQ8FjEpxBWnVwdFC5/JcEooDJS5vCFoRxUZaoqtUhpMZBMAn71vFYqZ/jfX4FYhbDgu4eVtzlo2XBctYGSF6xpUQK3vBBhRJK5BUfeDisLwBmhdhOxxWnPKhOJaP6guH4tvEIJo1FM7Y7Q8ZJNmiB9VUthYI4qvvO/4bc+Bi8KfthiC+sabby4q09ndkilQaNTcxqn5+XqqRuDj7O2MQHbsU7aINhqMdLnlykr4x7cqZdyFh5nXooDVe8S5obyBlcl2rOzCY92fXdVaRORHxCg2ridypuFTbEoFjS7jko9p4I1CXRdJQxFhO7dePOEY8gZX8lXm7K33Xc8EaSnuEwG6c3ZZTb1Rf7BHeULtq7GZiGOaRDhdp4FUKjUfh6ppVJsbHivXe7AEqlbbwjK9SoDZwi/RW4eRxZDmimPuyOIlzmDIjeHwCszsPK8/wCyNYsrt3iRHhI8oXpXeCJ015KvJNN2QhHxgbcNdddyeKnNdnFap4lkTvBJ3H6kbd4c1s1eIUrareMrh1Vq3ZAOS8ahZutXL67QuHYlnEJ00Y6NEaFQVxDSeRRHtDOIUOLxDO7dcZFawelK78fpCxDd4OKxLY3UtWKx4IOaXOqE3Dip6dcG26F2a4FtwdQpoXeQfvXDUrp+JJGZXTnt1dC7plnIo0ZEDH/6rKStvEWepHFgvHkihs8vGW4c4J4obGE78MXLY2fALjIi9+XJWrZmyTHi3QOVyi6uEpUhMNnibrLBurZ5lhdgkb9eoCLGJzM68lZ9jwaLYvFkHtqu57nDSLKLYdTcpbptclDkzkrxRrAzqiTlK4pbPvvO8hoERh3CVPi6ljyElTWS7wKG9oWGo6kD4m3IjQ+i1gu0tOpX7ghwdpIsehVJ2ridx7zTHidmRc5KTZOJexzX1WGx94hHoK+T+j01+Fa+8CVjaMIfZW0GPaHAgjI/QovE1IGaV4Gj/QPjJ3T0VH3Xiq54zOY6K4VKsg3lL2YUElxN+SeGyXJonwpZG/uAuHxHRHUNuje3fdHG10E6nHkMuvEpUXMc8XO9PD0VHkki6VMU3dBLWmdIuUo2m6m4eDwmMrx/dS4ir/LmwjIpTUxUaAyp07BJmUMW5ogO+KlZjHamSl1TFg6LndcbgQt0vJO2iXHNc4e8QeqC9lrQDvT5o5tN3FdMfu53TaWBW72AGlWJyMdVPiRDDLSCYAvxRNTHAGyVYvGl1TMQB5SmTY0Y5NeycysUftNTiFiJSixOoEGxlcGk/ULik7QXKmbVOroKXJNJGPbYbyhZSDj4ZJU9Z4cIkzxQ/tbWCA6OgusrC0H4dhaJIkz+SmdGoSQdYVabjGzao6CnexqwdUAG/AEzoeqDTHgi0UHENS/alYcFJUrj3QT1SvGuJIaLWuTlfhxP3QTKNIWYinvAmEEzDO5wAmD2EmASG5Zc1Pimw2GiJTtWgJtMXYXEXQ+19sAF9IZ7tzpJyHqo9ou3J3bnKVV3hxq+KYJSqA/eznHY9mGaHOG892QQuF7Ylzg2o1u4c7JNtwPq13CD4fCB0XWz9iPe9lOPeIHO/BVUVWRHN3guTMcaLhUp3puGSfv2wHsaRkfRJtq9mn4SgA6S0mW6xxCj2czwAg30Cm4oPf6HmDxZNiJ/ZMsACJtJOmSW4GmbSIn0TenSINvzRDRnK9nO0W+G4z1jK6SYhha4OA+twmuOxMWcbHKx8vqlGOqiPACbznEQiJaCMFji6xM8vzVbxRAE6HTgeCrNTHGQ8Wg3VipbtVhLjnExxCNAeUDisJyU7q4gXXVKlTAgg9VJTwdMz4oQsnVg3e6qI4gkwAiXYdoGcqIU2iCJkX+CKoVpekddxaQxzfEdOHVJsS6DOQXbtoOdWcXyL6rnEtFR1rcfJMkUpLRx7SFiP9hHNYjSD/IOwjiDLbFT1d9n9IJ5qQMJPhtF1M1lpcZKLQEgWliKjswFI2pT1HUqVo4Lod3+m+uqQKQC+swGzUVs/bG66wUowdN3igqensym4gjwwg6D1Yw9pL4sATaBp5qYUiSCZBEj+y1h8K1o6dVxUEFrpNzYT80qSHd0a7u5nyUdehvCLznbl80UXGAeKHxdU/0+f7J6FEW1KAuDMcOJSLFYQyHm0XA4K2dzLgDec0BjaG8S2Mh8gia8iYUqFR284hrtSEZhDh6L21A+SCCOChZg2tkObbNRVYcIjwmQeSWh1PFF07X7QoVcP3XeNNQbrwBfynjBVMw+EduhwHmPqutnYKqAQMnG/PhdN8HiCCabrAixtomJWANxZaRmeeWSsOBrNeP3ukeJe1xOn3RWzwRbRBqjWOn4VrrkBx/MklxuyC2SwEybwLjhlmPsnFCuZ1+/mj6VQOyhEFHmdcAPc1zIOROUjiidlVHNDgLgJ/t7ZIe8ZD72uPJC7P2cACDaSg2gpAftTjp6qRjw48EZU2c0a/Ncu2PvQWuBCFoDiQvYIQ9TGxbcJ6Ix+Bc2ygbTdJkZLCsSbSfJDoIBtdMsPstgYx7XSTmPko9slpbDrGbQi6Lwym3eMW/YBFvA8Mmu4PH1W1B7S3isQKjGtjALNzUHeH3pWY+KZBczMjPmisZu7rS0DLQRdO5Uyag2rRxhqtQ6AhcVajzlnyWmNfpIXTDB5ooQh72tkMtU3oYglkE+L4IF2IAzgTzR+z9l1K3uAlvHIfFBxsKdBuDxQLY3xIvx0+SzG4kWJI3otzKc4Ls3Rpgl/iMXGirv8QqdTcpmg2zd4ODeHhgga/ul/GO+RDuk+WNIgmwMKCuwC/51Snsrju8ptaSZaDbpFo+CaYx3msbYA3EDeMZRE8yhn0nCoI68fL5op27ItfjzKLosESfyOCJnsW46k2PdzGfEJJVexvgKseMIcLeSStwUu3onhJtbRAzQXsmnutzkT8LqPaTZqGPwIyCGgtsIgg6HqhKrA+5MEAA8eqNZFYudT3S5wNs4/ZT0sU4FpixgSEHUBaXNc6Wm7eMR/ZabWDQQTaRBOvMJqFHVTEbplxgcOaKpY5piPwpTiq4gEQ4GJBvnkgMXVa1o3LGSSOn0SjrJeg2nUhrnbrjkdOk8UPiNmVKQkskfqbe3NUJm3XkGcsh5ahexbGMUWB1zuiZ6DOUOloM1WSne00yL+a25lIgQYB4KybV7N0qwJZ/LfnIyPUKl7SwdfDmKjDuzZw909Cl/EI5YD2d1IG8fNHNw1Nx8JVXp48g+7CZYXaAEeINJ+SSUH4ZSTwdbcwlIFjBd+9vHgGj+6g23iWOw7wYJAtOhyEcFxhmurPfUJJEww8WjP1SrtNQc1jWjN7o+F0UspM6IpKJXu8csUv8Ahz/1LFbqvsj/AIX7tH2eeaRe6o10EWBM59EtwtJxhvMCTlcp7tDFO3SHCJS7D1QAVObyW4sxGLOztUf9WkfM/Zaf2We8wH056mfkk3/yIh5GmUL0jZuFFOnvH3iJPLkFVNURlFoRbP7FUxBr+Ij+kEx58VY6pDGhrQABYAWSapt6HXBIkfnRM6niCyYrjQBUrkOLT+DX1Q2Np7zOnDgisZSmCNPrY/BcUmSCIzCoI0VGptMUqwZADSLu1k2jlomhqgttf8vKq3anY2I74vYGuYTbiIHBcbD2w9hLXumJzGkZKcl6WjVFopgT9OvFS4mrDdLCTa3RVrF9oGWDRAmTz4x0RTNs03sAn3j4ToeA9FOmHA5AG6Cc4zyieCGoUgQ46fdDDHtfZzgCJkA2CkbimkwLizeWqAaNvO74MwbeQEoR1C06H5D9lLisU1oJtIsOeWXkEE/HiRcA28xnb4pkCgXaTZqESd3dt+/NJ8S0lwAcIvnfL7qTbG2gyQIg2n6pFs6t3kkzY806sRRyWj20RFoEW4kICt4jPAHpdKIGhdEzqmFSuAwkA2E80HHODrg4dWmGdlNm98+nTMbrS5zuJAOXxK9nwrIb+aKkfw92QWU+8cIc4DyAmB6yry98CE+kcbas052infh21GbjwHNOhQbCAC5xgdcgJSyv2oYwF26SALcPhoErZlFsVba7G7m9Up1AGC535kchCXUOzxqsDm1abb33pkD7pniNoPqAh7pa7Nv9PwVfwReyuWb3hzHHd5qfYouJIcsZ3RNMQYtImPVD19jnFQWva3cn3pvPCF242lFYOzQRMO4fVJHLK8iqIB/8Mqf51P8A7ltNu9/3LavSOXItxNffY5pEH7JdgaJkjipdm4try+JtnPNS4YEHJRm8nXxLAqwuDaK1Tw3EQTcXvYfC6sdXHVWMaG1HeMxczoePRL8NRO84nV9ugARm0H2YwDUGeELWGsEVFriRJOkyrtSO6IOl54jjxVSw7hHqrVRrS0EGWn0lPBkeVGYlu8D/AHQeHO6Y4fn0R1VsARJHJA4puo0nzHXqrJkTt1LfBkdD+ZaqlbU7JvLnvY4b0zERI8tVc8HUJOdoytnp6Susa0iHLP6Cn6jx3bGFq0gWvYbmBYj+6UUC45G4t8NIXuGIwLKg8TQ4c1U9q9jAZdRgHPc+xQ/YyyynYCs9u8Tn6fui34ipAvAKFrUX037hEcQ4Qbfp4o6nVaWwUkkUiBNrVC6CZAQu0HuF5IR1TENZMZpLtCtv2JjgtFWB4QpxNcudGfUp9s58BzQQ10ZROeSVUtkuNwWkdEPUovY4kOg8lT9E6kthYe+7SXxpDck32TTMAuBsb72o6Jlsrs1iDRbUqRLxLRrBym2aMw+w6wMBszGSEpVorwxheWem7FqMNBrhkRKkNQuMDzSPYVKrRoblQRLvCORvdPKMMaXO0vwE6LXiycopSaQD2re8UA1urhvX0zjpZIWlr27pHJb2rtJ1Rxk+HQfVAur2UHLJ0QhgPoUS0bpMjQ8tJXLW3iBPH90PR2iP6l0/GNdlmlsfqEPaYiFK1p7toE2OnNDYfFC4KNFZrWOnL7JU6YZRtEG67ifgPutpN/j1PmtqnYh1GDKTWNgWm5XNKoJKW1cYbodmOgoNMrBxrA77+HKWu8RdIK+LLjayz2onMoZGwOcNiE62ZtIMMH3T6c1UKNYyneGfIWtrIHFSLhTfadDwy6rT3AO1IcMuH9wgdh4jea6mTllxg/nqimndduG15af1aRzz+S6Iu1Zxyj1dATyadUT7pyTOtSltihNo0C+mQBJF26fD1C72RiO8pgyJyPUfgTWKsYMoGR6LpzIdPX6HJac3dcbWUzzYHX7IMIu2pgGVWw+m14Op56gqnbd7K2PcmIFmuy6Bxv8AFegMYcrRp0UGLoTfX75pWFHh2Iw1aj4ajN1xzJ4cjkgauFB8TjK9lxmBp1QabwJdoQCOsaKu1/4fUP6QRx8Z+RRUhr+ypUajWsA4BMeyewjXqGtUb/LHugx4jpbhmrbQ7LUaYl1wM7yPsjsCwOeA1oaxtwMjwJt+XRVDcs+yocMw/gFsp4cl3gaIBM5H6fhW6gtHL5qVz9xpkSQLLWRIKf8ANrk5tZYcC60oftFj2tpEBwJfYD/TMF3omNGgGU9xs3+Mm5MjLVI+1+FDWsdHikgnlFvzmkm8D8dWVqs+AhXPWV2lCF91FI7NE9QyoTVK7lF0djvfSdWjdpti5Gc/p5c0YiuVIBGJIyKm9rJEElSMpNGTh8FsD/V6JuqFfIwXumcFtG73P0C0jSF7C5+LO8QGjP8AUFlVxjJvk8fZNKYO8bqV9aMinJIS02u4fAypArLsLETWZqJ4xn1XHa/ZAov32+6+bfpPAckskUjPNMQ036JnhHFKqbLpthgoy0dEUP8AYL4qeV1YcTQ32xqLtPA6KrbMcA9pOU36KybwpgEAlmoud2dRy5KvHo5+ZZI8Hii485h4/SRr+cUPQDaVd9OY3wHt9ZXWO8DhUbcOImOOh+FkP2hsaVcCd0wejv7qiIDPGH3dZm/76LdIzafzzXD3ju5aJy106qKiYIIy9L5reGsmouMzOQLSOYnL0RRbIUD6IBmBoZjXKT6KbCtgAWnWOOqBhJtTDZPFi0x9vSFsYyGAkXTmswGREgi+X99VVntIduH+nJbqGzbi98lwMZwNc/t6pjs+nYnj94+vooaLAWieF40z45aI5o3GRynz6+aaqFZqnd/n8lO6oZA4ST5IbAU7Txy813Urw4l3D5D90WwEjMTBJzya0DK97+ZzSHtTiC4tEzAkxlJKK2hj6eGouxFbxEXgZS64AH1Va/xF1ZoqPABeJgZDgB5KXIW4lbIjBF0DVYJsUX3wGaBrhpdKitnU2g3ZmFNaq2kP6j6Zk/AFXjtZNLCinTAgw2OUKrdhsS32xrAJO44k/pEfNWjtpWhrGcST8IVUqRzzfZ0ee06dcz4APzkpK+ErBoc0bx1AGXmm9J/UqZp4I2aisRi/8j8+KxWq/FYh2BRW3Yq56lSMrzYDLNIqlWXmHuFzkBxKla9xEBziejVRoRSHOH2huva4aEH1V97Whr8KXWtukeZA+q8s8cXLp6NXqmMo97gd3OaY5ZAFCsGvJ5pVfBTTB4q0KuYrEOYd1wJA/q4dURgcWDk6VNxwdKbi6Za6eJhO+zu1d8uovgloBbP9TXSIPMR6hU+nXBGaAp7UczFte0+4B0Im4K3Gmgcis9K2g3dBZk0+4eBzj6qOj/NwpaRcA/EXsu8c0Yih4XbpMFp4HRLuz2LMvpPPin5DTr91RHM8PIw2Dig5u4c226x+y02qRIIggm3W4OVxkgsJU7qs5puDf4cFPjjFUODZa5sSOI46JgPQ8ow5skTP5Py+C4391w6kHziD+cULs+od08p+6NIBv0S+mJA+Y9fMKs16k4o8h8E/YCGBuZE35g2kpHXpgV3EX3vECDxEfRMtgkGYcWBzmL8V3jqnhjiZ+YXVBuXJQbQPiAyRME0TDY1z8rJFUxJq1HMYd4b/AIiDYARPyTTF4gNEatFo1nkgtj7O9mohrjLnEueetyB8UaBZXP4g40PpigLDMzxiyruy9qgU2g5gQje1FQnEO3hDZG7wIjMJe7BsOg+SnKvTs4+NyScWd4zajQJlKGV6lV3gkDUlF0cE2RablMWUw20RfJDC0aMOz/ky1fwywQbWJ4NNzmSYRnbbG/zg3Ro48UR/Dyl4X1Oe7ytc/NVrteXvxNQiqWgGAAG6WzKFCTa74Im7TPRSU9oO0hIm4Z5/6x/7f/VEUKL9Kjj8P/VagWO/bncAsSv2et+t/p9liGDdmI6jfE6LXPzKlw1A8Sha1bxu6n5qfD4rkFXRBDChQOp+69T2Ed7DM18MfCy8qpVpFjHReldi8RvYYDUEhBZDZ51jWjfcDe5HwJVd2hhjSO/Ty1CsvaOh3eKrN03pHKb/AFSWrXEhpMg/FBKmdUpXDIA3bTgYP1Rez8QXVC4+dvgVOMGwuniBC5w9ENLr6+ia0TUHuy79kdpNJOHqOMQSw/Meso3F9nDTq+00KrnEQS0wQ4axHJef08YWVGOFo91w5aFeq7PxY3GkxDwHWyEraIzyxftypG5Vb+a/nRF1qneU2uImCHfDUJdtBoNOpS/TJb0NxHyWthYnfw8GbT1BBRWRSwbLfM53ixEcdExYYaOECyq2w9stqV30QZc0G0AcNZvmrMDInO/yKDCiU1JExw462/Cq/tetuV2DiDPondKZzsQRHAg/ZVrtgIYyoLFriLef7IBehrSres+iDxVcd6ATp9UNg6++wHh9wRbyQWJquOJFMXO78Lm5TihGN2g7vAGsLiHCYEiOqcMO/Ej+wUWBwQpNI3t4m5MaoumPCedkJKjR2A4zZlKuN17d4ZtizgRqCqztXsfWY4mj/MZpcb3Q8VfWUt1oOZPoFgcdVNsqpNaPKMHsHFSzepVhcz4QLn8zVj2b2MrVD/NPdNniHOI6iwV7pvMx0UrG2RsVNohwGDZQZuUxutHzjMryrFUHve528LuPLMr1vFNO4+M4MfBeVmrT3jMi/FCTGiADZj5/dd09nvHLzRRqU5s/4kLttdgzcHIWUpAvsj/1D4rEf7TS4N9FiWzdUed7RYzvHzv+8dbZlR06bP1P+KK2mP5rx/qd8yoAAcwulLGTkTJmUWDJ7/ivTv4W4gblRkkwd6/MR9F5tTpt5q6/w3q7uILb+Jp9LpUMwz+IeDcKja4EtcN1x4FuU+R9F5ttd3i6NJ819DOpNMscAQdDkfiqH2g/huKm86g+CcmP90TeGkXjqsqsfs+tHnez8XLQDmBE8QtYaHbzgXC5GfBWL/6/xbC2GB0SPC5sDrMKXZnYTGCQWtbeZLhr0WYYtCSjhnPc1rM8o4zxXrOC2e+jRY2oQSAMsvJA9mOygoTVqkOeAYjJvO+ZT7f7wEA6WPS90pnnQr2hhKZcHe68tsRkeRCTbJHd1n03W3rg6HirUaTXMIOnp0STa1FrW71zuQ7nAzCosoi9k+zcIxuI3w0AwWzEEA3vxT6iCAdbnW6SYCtLmEGxAI/dWBpEGMjn521SyHO2i5I1g+kceXqkPabDzTqAGQYdFrEeXJO8K2QJi1jGVrWS3bLBuP5gcef3Smeir9m8XNuXyTPA097EPqDgGg8hc3VY2JXiv3c5yBykq/YGk1rS1gsLXzJ1PqnQoVh2QFsNmy6DY6WC7Av+aoMY2bmy7AXAaRMfkqamYU2OtG2ttKlYMguA3KVO0RkikBm8S4NpuPBpPovBsRhKbnEmnqdTx6r2Ltk5wwlTdMe7PQkWXlbaMrPAYoXHZtLPu58z910MJS/yo+P3TVmGnRb9lQsehX7HR/y/n91iaexlYtZqKZtX/jVP97v/ACKhYtLFd6OSOxhTyVu/h7/zbP8Aa/8A8SsWJPSjPT8Rm1T09fzRYsSvYVo07XzWU8lixFgQNV9w9D9UHgM/NbWJfSi0SUMndPqke28n/wC131WLFWJORFsXKn5fIKzj+nofmFixKwneGyPUpVj/AHH9B8ysWIemejzjZ3/PN/3r07Zfuef2WLEUKHu16/ddtz8gtLEPBjp+q7GQWLErG8OxoiBksWIoDE/a/wD5Or/+f/ILysLFiEh46Caa6bmsWJR/AlYsWLGP/9k="
                            alt="clochard"
                            activity="Crache sur un clochard"
                            price="Gratuit" />

                    <ActivityCards
                            photo="https://fever.imgix.net/plan/photo/a81f63a4-3f29-11e9-9020-067dfd978c4d.jpg?auto=compress&auto=Format&fm=jpg&w=220&h=220"
                            alt="clubbing"
                            activity="Soirée clubbing"
                            price="15€90" />
                    </div>
                    <Contact />
                    <Footer  />
                </div>
            )
        }
    }
}


export default App;
