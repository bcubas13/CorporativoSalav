import { useState } from 'react'
import Roshfrans from './assets/Roshfrans.ico'
import AutopartesSalav from './assets/AutopartesSalav.ico'
import MAYLO from './assets/MAYLO.ico'
import BAISA from './assets/BAISA.ico'
import MEJ from './assets/MEJ.ico'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Corporativo Salav Roshfrans S.A de C.V</h1>
      <div className= "Logo_Principal">
      <h2>
        Somos la mejor experiencia en el mundo
      </h2>
    </div>
        <div className="texto_web">
          <p>
            Haga clic en el icono para ser direccionado a la página web de la empresa.
          </p>
        </div>

      <div>
        <a href="https://salav.com.mx/" target="_blank">
          <img src="/CSR1.ico" className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.roshfrans.com/" target="_blank">
          <img src={Roshfrans} className="logo_Roshfrans" alt="Roshfrans_logo" />
        </a>
        <a href="https://autopartessalav.com.mx/" target="_blank">
          <img src={AutopartesSalav} className="logo_AutopartesSalav" alt="AutopartesSalav_logo" />
        </a>
        <a href="https://maylo.com.mx/" target="_blank">
          <img src={MAYLO} className="logo_MAYLO" alt="MAYLO_logo" />
        </a>
        <a href="https://autopartessalav.com.mx/" target="_blank">
          <img src={BAISA} className="logo_BAISA" alt="BAISA_logo" />
        </a>
        <a href="http://www.mej.com.mx/" target="_blank">
          <img src={MEJ} className="logo_MEJ" alt="MEJ_logo" />
        </a>
      </div>

      <p className="texto_links">
        Haga clic en los siguientes links para poder ingresar al programa.
      </p>

        <p >   
        <div id="links1">
            <div>
              <p>Contenido de Soporte TI.</p>
              <p>
                <a href="https://intelli1.zoolz.com/s-d7BW1BSf" target="_blank"> PROGRAMAS </a>
              </p>
              <p>
                <a href="https://drive.google.com/drive/folders/1_nVz-Op3iAW3LI3dxdBC8f9JlEvpoc3r?usp=share_link" target="_blank"> INVENTARIO </a>
              </p>
              <p>
                <a href="https://mail.roshfrans.com/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.roshfrans.com%2fowa%2f" target="_blank"> OUTLOOK WEB APP </a>
              </p>
              <p>
                <a href="https://get.teamviewer.com/corporativosalav" target="_blank"> TEAMVIEWER CORPORATIVO SALAV </a>
              </p>
              <p>
                <a href="https://get.teamviewer.com/corporativosalav" target="_blank"> TEAMVIEWER COMERCIAL ROSHFRANS </a>
              </p>
              <p>
                <a href="https://get.teamviewer.com/corporativosalav" target="_blank"> TEAMVIEWER AUTOPARTES SALAV </a>
              </p>
              <p>
                <a href="https://get.teamviewer.com/corporativosalav" target="_blank"> TEAMVIEWER BAISA </a>
              </p>
              <p>
                <a href="https://get.teamviewer.com/corporativosalav" target="_blank"> TEAMVIEWER MEJ </a>
              </p>
            </div>

            <div>
              <p>Contenido de programas para los usuarios.
              </p>
              <p>
                <a href="http://serverap.roshfrans.com:8000" target="_blank"> SIRO </a>
              </p>
              <p>
                <a href="http://192.168.10.56/CartaPorte/web/inicio.aspx" target="_blank"> CARTA PORTE </a>
              </p>
              <p>
                <a href="http://192.168.10.56/sscc/web/w_login.aspx" target="_blank"> SSCC </a>
              </p>
              <p>
                <a href="http://192.168.10.56/DTD/web/login.aspx" target="_blank"> DTD </a>
              </p>
              <p>
                <a href="http://192.168.10.56/micro/web/w_login.aspx" target="_blank"> MICRO </a>
              </p>
              <p>
                <a href="http://192.168.10.56/SAC/web/wp_login.aspx" target="_blank"> SAC </a>
              </p>
              <p>
                <a href="http://192.168.10.56/sgip/web/wplogin.aspx" target="_blank"> SGIP </a>
              </p>
              <p>
                <a href="http://192.168.10.56/SICOFA/web/login.aspx" target="_blank"> SICOFA </a>
              </p>
              <p>
                <a href="http://servicios.roshfrans.com:8089/login.aspx" target="_blank"> SIEXP </a>
              </p>
              <p>
                <a href="http://192.168.10.56/SICOV1/Web/inicio.aspx" target="_blank"> SICOV </a>
              </p>
              <p>
                <a href="https://serviciosweb.roshfrans.com:449/Sistema/Web/wpinicio.aspx" target="_blank"> ACTIVO FIJO </a>
              </p>
              <p>
                <a href="http://srvrsgv/sgvweb/ingreso.aspx" target="_blank"> SGV </a>
              </p>
              <p>
                <a href="https://serviciosweb.roshfrans.com:444/wpinicio.aspx" target="_blank"> PROVEEDORES </a>
              </p>
              <p>
                <a href="http://192.168.10.12/" target="_blank"> DYNAMICPOLICY </a>
              </p>
              <p>
                <a href="http://192.168.10.253:8088/businessobjects/enterprise115/desktoplaunch/InfoView/logon/logon.do" target="_blank"> BO </a>
              </p>
              <p>
                <a href="http://srvrsgv/sgvns/" target="_blank"> SGV NS </a>
              </p>
            </div>


            <div>
              <p>Extras.</p>
                <p>
                  <a href="https://workbeat.com/" target="_blank"> WORKBEAT </a>
                </p>
                <p>
                  <a href="https://moodle.roshfrans.com:826/" target="_blank"> MOODLE </a>
                </p>
                <p>
                  <a href="http://192.168.10.56/quiniela/web/wpingreso.aspx" target="_blank"> QUINIELA </a>
                </p>
            </div>

          </div>
        </p>

    </div>
  
  )



}

export default App


