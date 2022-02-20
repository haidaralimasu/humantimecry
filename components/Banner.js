import React, { useState } from "react";
import { ethers } from "ethers";
import {
  useBalanceOf,
  useTotalSupply,
  useMaxSupply,
  useIsWhitelisted,
  useOnlyWhitelisted,
  useCost,
  useWeiCost,
  useNftPerAddressLimit,
} from "../hooks";
import { useEthers } from "@usedapp/core";
import { notifyError, notifyMintSuccess } from "../toast";
import nftabi from "../hooks/NFT.json";

const Banner = () => {
  const [amount, setAmount] = useState(1);
  const [minting, setMinting] = useState(false);
  const { account } = useEthers();

  const cost = useCost();
  const totalSupply = useTotalSupply();
  const maxSupply = useMaxSupply();
  const weiCost = useWeiCost();
  const balance = useBalanceOf(account);
  const limit = useNftPerAddressLimit();
  const onlyWhitelisted = useOnlyWhitelisted();
  const isWhitelisted = useIsWhitelisted(account);

  const address = "0x22d276433b3b3566baef76700E7dD054421981Eb";
  // const address = "0x60B833CdD6dD38876c93Dd3512A75cC3857F200d";

  const nftInterface = new ethers.utils.Interface(nftabi);

  const increase = () => {
    if (amount < 5) {
      setAmount(amount + 1);
    }
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  async function handleMint() {
    try {
      setMinting(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const txCost = Number(weiCost) * amount;
      let nftcontract = new ethers.Contract(address, nftInterface, signer);
      let transaction = await nftcontract.mint(amount, {
        value: txCost.toString(),
      });
      await transaction.wait();
      setMinting(false);
      setAmount(1);
      notifyMintSuccess();
    } catch (error) {
      notifyError();
      setAmount(1);
      console.log(error);
      setMinting(false);
    }
  }

  return (
    <section
      className="banner-one"
      id="banner"
      style={{
        backgroundImage: `url(/assets/images/background/banner-bg-1-1.png)`,
        maxHeight: "250vh",
      }}
    >
      <img
        src="/assets/images/shapes/banner-shapes-1-1.png"
        alt=""
        className="banner-one__shape-1"
      />
      <img
        src="/assets/images/shapes/banner-shapes-1-2.png"
        alt=""
        className="banner-one__shape-2"
      />

      <img
        src="/assets/images/shapes/banner-shapes-1-4.png"
        alt=""
        className="banner-one__shape-4"
      />
      <img
        src="/assets/images/shapes/banner-shapes-1-5.png"
        alt=""
        className="banner-one__shape-5"
      />
      <img
        src="/assets/images/shapes/banner-shapes-1-6.png"
        alt=""
        className="banner-one__shape-6"
      />
      <img
        src="/assets/images/shapes/banner-shapes-1-7.png"
        alt=""
        className="banner-one__shape-7"
      />

      <div className="container">
        <img
          src="/assets/images/shapes/banner-shapes-1-3.png"
          alt=""
          className="banner-one__shape-moc-1"
        />
        <img
          style={{
            height: 600,
            borderRadius: 10,
            width: 500,
            marginBottom: "100px",
          }}
          src="images/1.svg"
          alt=""
          className="banner-one__moc"
        />
        <div className="row">
          <div style={{ marginTop: "-100px" }} className="col-lg-7">
            <div className="banner-one__content">
              <p className="banner-one__tag-line"></p>
              <h3 style={{ fontWeight: "bold", marginBottom: "80px" }}>
                Human Time Cry
              </h3>
              <h1 style={{ color: "white" }}>
                {totalSupply}/{maxSupply}
              </h1>
              <h2 style={{ color: "white" }}> Price: {cost} MATIC</h2>
              <p>
                Status: Live <br />
                Your Mint: {balance}/{limit}
              </p>

              <>
                {account ? (
                  <>
                    {onlyWhitelisted ? (
                      <>
                        {isWhitelisted ? (
                          <>
                            <a
                              style={{ cursor: "pointer", color: "white" }}
                              onClick={() => decrease()}
                              className="thm-btn banner-one__btn scroll-to-target"
                            >
                              -
                            </a>
                            <a
                              style={{ cursor: "pointer", color: "white" }}
                              onClick={() => handleMint()}
                              className="thm-btn banner-one__btn scroll-to-target"
                            >
                              Mint {amount}
                            </a>
                            <a
                              style={{ cursor: "pointer", color: "white" }}
                              onClick={() => increase()}
                              className="thm-btn banner-one__btn scroll-to-target"
                            >
                              +
                            </a>
                          </>
                        ) : (
                          <>
                            <a
                              style={{ cursor: "pointer", color: "white" }}
                              className="thm-btn banner-one__btn scroll-to-target"
                            >
                              Please Wait For Public Sale
                            </a>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <a
                          style={{ cursor: "pointer", color: "white" }}
                          onClick={() => decrease()}
                          className="thm-btn banner-one__btn scroll-to-target"
                        >
                          -
                        </a>
                        <a
                          style={{ cursor: "pointer", color: "white" }}
                          onClick={() => handleMint()}
                          className="thm-btn banner-one__btn scroll-to-target"
                        >
                          Mint {amount}
                        </a>
                        <a
                          style={{ cursor: "pointer", color: "white" }}
                          onClick={() => increase()}
                          className="thm-btn banner-one__btn scroll-to-target"
                        >
                          +
                        </a>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <a
                      style={{ cursor: "pointer", color: "white" }}
                      className="thm-btn banner-one__btn scroll-to-target"
                    >
                      Please Connect First
                    </a>
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
