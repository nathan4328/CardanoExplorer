import { useRouter } from "next/router";
import { useState } from "react";
import WalletButton from "./walletButton";
import WalletData from "./walletData";


function StakePage() {

    const router = useRouter();
    const { stake } = router.query;
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async  (event) => {
      event.preventDefault();
      // Use the `router.push` method to navigate to the dynamic page with the entered number as the URL parameter.
      if(searchQuery.startsWith('add')){
        let stakeAddress = await getStakeFromAddressKoios(searchQuery);
        router.push(`/${stakeAddress}`);
      }
      else if (searchQuery.startsWith('stake') || searchQuery.startsWith('$')){
        router.push(`/${searchQuery}`);
      }
      else{
        router.push(`/${'token'}/${searchQuery}`);
      }
    }

    async function getStakeFromAddressKoios(address){
      const req = await fetch('https://api.koios.rest/api/v0/address_info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "_addresses": [ address
          ]
        })
      });
  
      const res = await req.json();
      return res[0].stake_address;
    }

    return (
      <div>
        <header>
        <label className="main-label">✥ Explorer</label>
        <form className="searchForm" onSubmit={handleSearch}>
          <input type="text" className = "search-input" placeholder="Search for an address or a specific token..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
          <button type="submit" className="search-button">Search</button>
        </form>
        <WalletButton stake = {stake}/>
      </header>
        <div className="tokenList"><WalletData stakeAddress={stake}/></div>
      </div>
    );
}



export async function getStaticPaths() {
    // This function creates the dynamic paths for the page.
    // In this case, we have a list of all possible numbers between 1 and 5 that we can use to create the paths
    
    return {
      paths: [],
      fallback: true
    };
  }

export async function getStaticProps({ params }) {
    // This function fetches the data for the page.
    // In this case, we don't need to fetch anpny data because the number is already available in the params object.
    let stake = params.stake;
  
    
    return {
      props: {
        stake
      }
    }
  }
  
  export default StakePage;