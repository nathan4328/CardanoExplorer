import { Lucid } from "lucid-cardano";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import Prices from "./prices";
import SearchBar from "./searchbar";
import WalletButton from "./walletButton";

export default function Home(props){

    const [isLoading, setisLoading] = useState(null);

    const router = useRouter();

    useEffect(() => {
        if(props.data != null){
            setisLoading('loaded');
        }
        else{
            setisLoading('loading');
        }
    },[props.data])

    function setPriceData (data){
        props.prices(data);
    }


  
    // gets stake address from wallet using cip-30 and lucid
    // @params - the name of the wallet to connect to e.g. 'Nami' or 'Typhon Wallet'
    // @returns - the stake address of the connected wallet
    async function getStakeAddressFromWallet(wallet){
      try{
        // instantiates Lucid - a javascript framework which encapsulates the CIP-30 Dapp Connector
        const lucid = await Lucid.new();

        // api here is set to the requested wallet
        // the user is promted to connect the wallet to the site
        // if the user clicks 'connect', wallet data can be fetched
        var api = '';
    
        if(wallet == 'Typhon Wallet'){
          api = await window.cardano.typhoncip30.enable();
        }
        else if(wallet == 'eternl'){
          api = await window.cardano.eternl.enable();
        }
        else if(wallet == 'Nami'){
          api = await window.cardano.nami.enable();
        }
        else if(wallet == 'Flint Wallet'){
          api = await window.cardano.flint.enable();
        }
        else{
          return null;
        }
        lucid.selectWallet(api);

        // reward address (a.k.a stake address) is fetched from the wallet api
        let stake = await lucid.wallet.rewardAddress();

        return stake;
      }catch(error){
        return null;
      }

    }

    const scrollToSection = (id) => {
    
        const element = document.getElementById(id);
        if(element != null){
        element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  
    // handles the selection of a wallet
    // @params - the name of the wallet to connect to e.g. 'Nami' or 'Typhon Wallet'
    // @returns - the stake address of the connected wallet
    const handleSelect = async (wallet) => {
        let stake = await getStakeAddressFromWallet(wallet);

        if(stake!= null){
            if(props.data.stake == stake){
                scrollToSection('wallet');
            }
            else{
                router.push(`/${stake}`);
            }
        }
        else{
        }
    }

    return (<div className="home">
                <div className="home-body"> 
                    <div className="home-body-header">
                    </div>
                    <Prices data={setPriceData}/>
                    <div className="home-body-wallets">
                        <div className="arrow"><h1>Connect your Wallet</h1><Image src={'/arrow.png'} width={50} height={50} alt={'arrow'}/></div>
                        <button className="home-wallet-button" onClick={() => handleSelect('Typhon Wallet')}><img className="wallet-img" src='/typhon.svg'></img></button>
                        <button className="home-wallet-button" onClick={() => handleSelect('eternl')}><img className="wallet-img" src='/eternl.png'></img></button>
                        <button className="home-wallet-button" onClick={() => handleSelect('Nami')}><img className="wallet-img" src='/nami.svg'></img></button>
                        <button className="home-wallet-button" onClick={() => handleSelect('Flint Wallet')}><img className="wallet-img" src='/flint.png'></img></button><br/>
                    </div>
                </div>
            </div>)
}