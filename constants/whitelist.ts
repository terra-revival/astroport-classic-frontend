// NOTE: Token whitelist moved to tokenCache and treated as a cache
//       (i.e. missing tokens will simply be fetched)

import { PairResponse } from "modules/common";

export type Whitelist = {
  classic: {
    pairs: PairResponse[];
  };
  testnet: {
    pairs: PairResponse[];
  };
};

const whitelist: Whitelist = {
  classic: {
    pairs: [
      // luna-ust
      {
        asset_infos: [
          {
            native_token: {
              denom: "uusd",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1m6ywlgn6wrjuagcmmezzz2a029gtldhey5k552",
        liquidity_token: "terra1m24f7k4g66gnh9f7uncp32p722v0kyt3q4l3u5",
        pair_type: {
          xyk: {},
        },
      },
      // bLuna-luna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1j66jatn3k50hjtg2xemnjm8s7y8dws9xqa5y8w",
        liquidity_token: "terra1htw7hm40ch0hacm8qpgd24sus4h0tq3hsseatl",
        pair_type: {
          stable: {},
        },
      },
      // anc-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1qr2k6yjjd5p2kaewqvg93ag74k6gyjr7re37fs",
        liquidity_token: "terra1wmaty65yt7mjw6fjfymkd9zsm6atsq82d9arcd",
        pair_type: {
          xyk: {},
        },
      },
      // mir-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra143xxfw5xf62d5m32k3t4eu9s82ccw80lcprzl9",
        liquidity_token: "terra17trxzqjetl0q6xxep0s2w743dhw2cay0x47puc",
        pair_type: {
          xyk: {},
        },
      },
      // orion-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1mxyp5z27xxgmv70xpqjk7jvfq54as9dfzug74m",
        liquidity_token: "terra1w80npmymwhdtvcmrg44xmqqdnufu3gyfaytr9z",
        pair_type: {
          xyk: {},
        },
      },
      // stt-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1m95udvvdame93kl6j2mk8d03kc982wqgr75jsr",
        liquidity_token: "terra14p4srhzd5zng8vghly5artly0s53dmryvg3qc6",
        pair_type: {
          xyk: {},
        },
      },
      // vkr-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra15s2wgdeqhuc4gfg7sfjyaep5cch38mwtzmwqrx",
        liquidity_token: "terra1lw36qqz72mxajrfgkv24lahudq3ehmkpc305yc",
        pair_type: {
          xyk: {},
        },
      },
      // mine-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra134m8n2epp0n40qr08qsvvrzycn2zq4zcpmue48",
        liquidity_token: "terra16unvjel8vvtanxjpw49ehvga5qjlstn8c826qe",
        pair_type: {
          xyk: {},
        },
      },
      // psi-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra12897djskt9rge8dtmm86w654g7kzckkd698608",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1v5ct2tuhfqd0tf8z0wwengh4fg77kaczgf6gtx",
        liquidity_token: "terra1cspx9menzglmn7xt3tcn8v8lg6gu9r50d7lnve",
        pair_type: {
          xyk: {},
        },
      },
      // apollo-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra100yeqvww74h4yaejj6h733thgcafdaukjtw397",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1zpnhtf9h5s7ze2ewlqyer83sr4043qcq64zfc4",
        liquidity_token: "terra1zuktmswe9zjck0xdpw2k79t0crjk86fljv2rm0",
        pair_type: {
          xyk: {},
        },
      },
      // astro-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1l7xu2rl3c7qmtx3r5sd2tz25glf6jh8ul7aag7",
        liquidity_token: "terra17n5sunn88hpy965mzvt3079fqx3rttnplg779g",
        pair_type: {
          xyk: {},
        },
      },
      // wAVAX-luna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra16jaryra6dgfvkd3gqr5tcpy3p2s37stpa9sk7s",
        liquidity_token: "terra1pme6xgsr0f6sdcq5gm2qs8dsc2v0h6gqzs8js5",
        pair_type: {
          xyk: {},
        },
      },
      // wBNB-luna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1tehmd65kyleuwuf3a362mhnupkpza29vd86sml",
        liquidity_token: "terra1wk0lev7qneurzp2dzcauh2ktctwx6v079uvn7w",
        pair_type: {
          xyk: {},
        },
      },
      // wETH-luna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1m32zs8725j9jzvva7zmytzasj392wpss63j2v0",
        liquidity_token: "terra1lmlv43teqcty6xldtg4f40sghnd2f8ehjz0qpk",
        pair_type: {
          xyk: {},
        },
      },
      // wSOL-luna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra16e5tgdxre44gvmjuu3ulsa64kc6eku4972yjp3",
        liquidity_token: "terra1x6jws8lh505gw7dl67a7qq077g9mn3cjj3v22r",
        pair_type: {
          xyk: {},
        },
      },
      // wMATIC-luna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1wr07qcmfqz2vxhcfr6k8xv8eh5es7u9mv2z07x",
        liquidity_token: "terra1n32fdqslpyug72zrcv8gwq37vjj0mxhy9p4g7z",
        pair_type: {
          xyk: {},
        },
      },
      // xdefi-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1476fucrvu5tuga2nx28r3fctd34xhksc2gckgf",
        liquidity_token: "terra1krvq5hk3a37yeydzfrgjj00d8xygk5um9jas8p",
        pair_type: {
          xyk: {},
        },
      },
      // weUSDC-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1x0ulpvp6m46c5j7t40nj24mjp900954ys2jsnu",
        liquidity_token: "terra1lapdj4fcg936fpgdwewx55h7n79p4p9tzrg4lw",
        pair_type: {
          stable: {},
        },
      },
      // wsoUSDC-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1cc6kqk0yl25hdpr5llxmx62mlyfdl7n0rwl3hq",
        liquidity_token: "terra1yf9hh2zrpydwqnqaw4p5hqfzzhgv49jj24prew",
        pair_type: {
          stable: {},
        },
      },
      // wavUSDC-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1qmxkqcgcgq8ch72k6kwu3ztz6fh8tx2xd76ws7",
        liquidity_token: "terra1hkm7w33fpmnruxka9tykfsntl4s692kwr8hj27",
        pair_type: {
          stable: {},
        },
      },
      // wBUSD-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1szt6cq52akhmzcqw5jhkw3tvdjtl4kvyk3zkhx",
        liquidity_token: "terra186cxwpreuzqm9nhmaltycxfyqxz379aef752qw",
        pair_type: {
          stable: {},
        },
      },
      // wpoUSDC-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1cevdyd0gvta3h79uh5t47kk235rvn42gzf0450",
        liquidity_token: "terra1m4j80w4lustnjhszqm9ltdvfmrfptlwcznek4a",
        pair_type: {
          stable: {},
        },
      },
      // stLUNA-luna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1gxjjrer8mywt4020xdl5e5x7n6ncn6w38gjzae",
        liquidity_token: "terra1h2lasu3a5207yt7decg0s09z5ltw953nrgj820",
        pair_type: {
          stable: {},
        },
      },
      // nLuna-psi
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra12897djskt9rge8dtmm86w654g7kzckkd698608",
            },
          },
          {
            token: {
              contract_addr: "terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j",
            },
          },
        ],
        contract_addr: "terra10lv5wz84kpwxys7jeqkfxx299drs3vnw0lj8mz",
        liquidity_token: "terra1t53c8p0zwvj5xx7sxh3qtse0fq5765dltjrg33",
        pair_type: {
          xyk: {},
        },
      },
      // nEth-psi
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra12897djskt9rge8dtmm86w654g7kzckkd698608",
            },
          },
          {
            token: {
              contract_addr: "terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn",
            },
          },
        ],
        contract_addr: "terra18hjdxnnkv8ewqlaqj3zpn0vsfpzdt3d0y2ufdz",
        liquidity_token: "terra1pjfqacx7k6dg63v2h5q96zjg7w5q25093wnkjc",
        pair_type: {
          xyk: {},
        },
      },
      // wsstSOL-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra18dq84qfpz267xuu0k47066svuaez9hr4xvwlex",
        liquidity_token: "terra1cgvlpz6vltqa49jlj3yr2ddnwy22xw62k4433t",
        pair_type: {
          xyk: {},
        },
      },
      // wewstETH-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1edurrzv6hhd8u48engmydwhvz8qzmhhuakhwj3",
        liquidity_token: "terra1qz4cv5lsfw4k2266q52z9rtz64n58paxy9d476",
        pair_type: {
          xyk: {},
        },
      },
      // wgOHM-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1mv04l9m4xc6fntxnty265rsqpnn0nk8aq0c9ge",
        liquidity_token: "terra160jxnp3qfxrrjrfhul3xens4ggw6le7p4m4e6g",
        pair_type: {
          xyk: {},
        },
      },
      // orne-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra13yftwgefkggq3u627gphq98s6ufwh9u85h5kmg",
        liquidity_token: "terra16zy9g2eym8rghxx95ny60c3dyrwqsfx0ypmu5y",
        pair_type: {
          xyk: {},
        },
      },
      // loca-uusd
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1296jw27cq8svlg4ywm8t84u448p3zs7mcqg9ra",
        liquidity_token: "terra1c7upd2p5p294dtdj7xx0dd9yu5cm2ak4lgz2h0",
        pair_type: {
          xyk: {},
        },
      },
      // luart-uusd
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra143az0w2e504n56q7k43qyh2fu69fh3rhup32n3",
        liquidity_token: "terra1tgg6ccwy42aya75rjtpx4cagpg64p5rz59vxtj",
        pair_type: {
          xyk: {},
        },
      },
      // skuji-kuji
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn",
            },
          },
          {
            token: {
              contract_addr: "terra188w26t95tf4dz77raftme8p75rggatxjxfeknw",
            },
          },
        ],
        contract_addr: "terra1hlq6ye6km5sq2pcnmrvlf784gs9zygt0akwvsu",
        liquidity_token: "terra1kp4n4tms5w4tvvypya7589zswssqqahtjxy6da",
        pair_type: {
          xyk: {},
        },
      },
      // mars-uusd
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra19wauh79y42u5vt62c5adt2g5h4exgh26t3rpds",
        liquidity_token: "terra1ww6sqvfgmktp0afcmvg78st6z89x5zr3tmvpss",
        pair_type: {
          xyk: {},
        },
      },
      // lota-uusd
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1z7634s8kyyvjjuv7lcgkfy49hamxssxq9f9xw6",
        liquidity_token: "terra1sw3kfuzd84t89krrshqusylqqvqw6amavp7rsu",
        pair_type: {
          xyk: {},
        },
      },
      // lunax-uluna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1qswfc7hmmsnwf7f2nyyx843sug60urnqgz75zu",
        liquidity_token: "terra1k7lexx35v4lutnfdf7n7luf3hmt2wphn633fau",
        pair_type: {
          stable: {},
        },
      },
      // ldo-stLuna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc",
            },
          },
          {
            token: {
              contract_addr: "terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z",
            },
          },
        ],
        contract_addr: "terra1repcset8dt8z9wm5s6x77n3sjg8hduem9tntd6",
        liquidity_token: "terra1yfwpk58tlvgzxx7zfrutlskgcp0cdqxtngpp6y",
        pair_type: {
          xyk: {},
        },
      },
      // bETH-wETH
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun",
            },
          },
          {
            token: {
              contract_addr: "terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r",
            },
          },
        ],
        contract_addr: "terra1wgdjvp388mlvhad8u7ly5d34ga4zyyfvf3e5j8",
        liquidity_token: "terra19tmtkl0w6kfgvxj6tt3dg0vepzrzugh0x9yfpk",
        pair_type: {
          stable: {},
        },
      },
      // bETH-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1myl709y74vrdcyuxy6g9wv5l2sgah4e9lstnwe",
        liquidity_token: "terra1dy8mq25x79jrdzz30j230suka37xt39lcgdcl4",
        pair_type: {
          xyk: {},
        },
      },
      // sayve-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1k8lvj3w7dxzd6zlyptcj086gfwms422xkqjmzx",
        liquidity_token: "terra1drradty46zqun4624p8a3sp9h5jfg9phwlgnm2",
        pair_type: {
          xyk: {},
        },
      },
      // KUJI-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1hasy32pvxmgu485x5tujylemqxynsv72lsu7ve",
        liquidity_token: "terra1r0cq3zmc07dzf95h4du6ja59n5gmxr9fp3lkcc",
        pair_type: {
          xyk: {},
        },
      },
      // PRISM-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra10nfk6fcz5nc5uru964qmpels9ctg6j0vczjgl7",
        liquidity_token: "terra156sdvmjkezv5yxpgcxug0s73zkvdqk72pldkva",
        pair_type: {
          xyk: {},
        },
      },
      // aUST-UST // Hidden for now: https://astrochad.slack.com/archives/C02L22MKE1Z/p1648541976551629
      /*
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra18fl6aywx2c8xlfp5epl40dygqnrvqp9a678a9c",
        liquidity_token: "terra1g3cf0ml4yr2qkz6k3lkh07yykwuhlpsg6x5lvz",
        pair_type: {
          stable: {},
        },
      },*/
      // AVAX-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1hn8d8ldzu2v2td5uj335pz32phanm90a4kjfal",
        liquidity_token: "terra1cmvmemsas2rrmytq6wtvt7jf0nrg7dpc804jws",
        pair_type: {
          xyk: {},
        },
      },
      // PRISM-xPRISM
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz",
            },
          },
          {
            token: {
              contract_addr: "terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw",
            },
          },
        ],
        contract_addr: "terra1c868juk7lk9vuvetf0644qgxscsu4xwag6yaxs",
        liquidity_token: "terra198en0xuzldzyark7pqz409p3u2d2g3y3k8u3py",
        pair_type: {
          stable: {},
        },
      },
      // AVAX-wasAVAX
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m",
            },
          },
          {
            token: {
              contract_addr: "terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58",
            },
          },
        ],
        contract_addr: "terra1pxexyejamkg856vmspyttcy4sva84qgyaq445z",
        liquidity_token: "terra140ss694rxten5r6l2dxqta0xgzt60ev5pnh3pt",
        pair_type: {
          stable: {},
        },
      },
      // cLUNA-LUNA
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra102t6psqa45ahfd7wjskk3gcnfev32wdngkcjzd",
        liquidity_token: "terra1snhuxa7zjmy3cpa3d85uu3pe7m5q8h66xgsqss",
        pair_type: {
          stable: {},
        },
      },
      // cLUNA-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1tkcnky57lthm2w7xce9cj5jeu9hjtq427tpwxr",
        liquidity_token: "terra1k2y7sk3ltg064xt462a8ut22fpw85qsamujzz7",
        pair_type: {
          xyk: {},
        },
      },
      // pLUNA-LUNA
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1r6fchdsr8k65082u3cyrdn6x2n8hrpyrp72je0",
        liquidity_token: "terra1j2zvs6gwwnwta39smr0a8qq2grax96nky0xh2y",
        pair_type: {
          xyk: {},
        },
      },
      // yLUNA-LUNA
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1aa68js6yxavg9zzzle2zaynem9cstvmaj3xyu3",
        liquidity_token: "terra12kf0s56pz2xhus9cqs4wva2xgz8wdkuqmh396s",
        pair_type: {
          xyk: {},
        },
      },
      //OSMO-UST
      {
        asset_infos: [
          {
            native_token: {
              denom:
                "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1ngs0xlmxan6ktqwtcj8c2l2ddp3z00wpxt43vr",
        liquidity_token: "terra1lz898jzfs2l5w6afzucg90nwf67j8xtl9ugzcl",
        pair_type: {
          xyk: {},
        },
      },
      //SCRT-UST
      {
        asset_infos: [
          {
            native_token: {
              denom:
                "ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra12k8d0uzrgcqn4ge4k8ntr4aaycpwunz7pu2umj",
        liquidity_token: "terra19dkkjtyrmkhxx7weg2xp9aftks7yjmzmc7xz6m",
        pair_type: {
          xyk: {},
        },
      },
      //ATOM-UST
      {
        asset_infos: [
          {
            native_token: {
              denom:
                "ibc/18ABA66B791918D51D33415DA173632735D830E2E77E63C91C11D3008CFD5262",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra14rnschsdlllt00yk8fxvxmcqgzhme3cx06t2x4",
        liquidity_token: "terra1s0cg9adk0c76swm5qqcv5lt8n9uaqwg9e5puw9",
        pair_type: {
          xyk: {},
        },
      },
      // MARS-xMARS
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n",
            },
          },
          {
            token: {
              contract_addr: "terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4",
            },
          },
        ],
        contract_addr: "terra1dawj5mr2qt2nlurge30lfgjg6ly4ls99yeyd25",
        liquidity_token: "terra1cxmdyn5srv8uwvhgz5ckqf28zf8c7uwyz08f2j",
        pair_type: {
          stable: {},
        },
      },
      // BRO-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra170x0m3vmc7s5pdvpt5lh9n6wfmsz6wcykcr0vg",
        liquidity_token: "terra1mzslpzys2j67c2pzmde8kvj27vvkup978ujgcg",
        pair_type: {
          xyk: {},
        },
      },
      // KUST-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra15rx5ghq4nxrv62fqvdvm78kuasfkl95c6mcmqs",
        liquidity_token: "terra16aurvlp5xctv0ftcelaseypyc89ylf4y0s5q0y",
        pair_type: {
          stable: {},
        },
      },
      // KNTC-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra14sal7lg7ny207yz0ue4dc02mdqs03zytegsn2r",
        liquidity_token: "terra1nv2un60yflp8rxe6vhhgx976l74n64gyye825m",
        pair_type: {
          xyk: {},
        },
      },
      // bATOM-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra13xz77zwk9jvulch92uwzuk3astcp0uvymh7f2p",
        liquidity_token: "terra10ky0rku6xq7lphdxej65x47tzq64ep2detdga7",
        pair_type: {
          xyk: {},
        },
      },
      // whSD-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1gj2l0vrna4g73e0500hexzyy444g46vre3eaa3",
        liquidity_token: "terra1waafz57kdr2y6y8wcqq0rx72cjwkj0pg5f64au",
        pair_type: {
          xyk: {},
        },
      },
      // RCT-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra10xczfpmpryl3m434jjvvv0rre70yyscw98pueu",
        liquidity_token: "terra1d43k757a7p3zh6eagfvfwwll0pywtns4an3psr",
        pair_type: {
          xyk: {},
        },
      },
      // STEAK-LUNA
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra14q0cgunptuym048a4y2awt8a7fl9acudmfzk5e",
        liquidity_token: "terra1pwc77c6a588cualln2uypyyvg5r76tfaazgk62",
        pair_type: {
          stable: {},
        },
      },
      // FURY-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1jfuq655fmqp7uhkkqanmljqj26r9acs68drn2s",
        liquidity_token: "terra1xjl8xqg2ahjg5yfslg4n6lyl7qam0jne0440ps",
        pair_type: {
          xyk: {},
        },
      },
      // NEB-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1d7028vhd9u26fqyreee38cj39fwqvcyjps8sjk",
        liquidity_token: "terra1l40w4g5fea0qhlh304uzsyv03hanhpnsmrv0a9",
        pair_type: {
          xyk: {},
        },
      },
    ],
  },
  testnet: {
    pairs: [
      // luna-ust
      {
        asset_infos: [
          {
            native_token: {
              denom: "uluna",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1e49fv4xm3c2znzpxmxs0z2z6y74xlwxspxt38s",
        liquidity_token: "terra1dqjpcqej9nxej80u0p56rhkrzlr6w8tp7txkmj",
        pair_type: {
          xyk: {},
        },
      },
      // bluna-luna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1u0t35drzyy0mujj8rkdyzhe264uls4ug3wdp3x",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1esle9h9cjeavul53dqqws047fpwdhj6tynj5u4",
        liquidity_token: "terra14e7z2ll6eweq6cxe6qkvl28hatapmw2uflxcyt",
        pair_type: {
          stable: {},
        },
      },
      // anc-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1747mad58h0w4y589y3sk84r5efqdev9q4r02pc",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra13r3vngakfw457dwhw9ef36mc8w6agggefe70d9",
        liquidity_token: "terra1agu2qllktlmf0jdkuhcheqtchnkppzrl4759y6",
        pair_type: {
          xyk: {},
        },
      },
      // mir-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra10llyp6v3j3her8u3ce66ragytu45kcmd9asj3u",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1xrt4j56mkefvhnyqqd5pgk7pfxullnkvsje7wx",
        liquidity_token: "terra1efmcf22aweaj3zzjhzgyghv88dda0yk4j9jp29",
        pair_type: {
          xyk: {},
        },
      },
      // vkr-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1a8hskrwnccq0v7gq3n24nraaqt7yevzy005uf5",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra168jy6ej8rm2kf8wtygavpqq5fpc5ewq39xe36a",
        liquidity_token: "terra1qrpflfyte76cvxdj8tftj2qvat47aus38h58p4",
        pair_type: {
          xyk: {},
        },
      },
      // psi-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra18nle009rtynpjgleh2975rleu5zts0zdtqryte",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1a7vcghx2vjyg74nqk5krd9ppa8ks8ytz5vdsgp",
        liquidity_token: "terra1zv9uhshhuw6yr4m95nx54cpl0g4ahska5uwfv8",
        pair_type: {
          xyk: {},
        },
      },
      // orion-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra13qdskca8xavmed88htplse0z396tesgh63tn9r",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1yw0vertt9yzpr2nzwtduau3qnrje46uzksqjft",
        liquidity_token: "terra1nzmdsg20gd04cxzmvmzg0zglvz5yan3fmzg9t8",
        pair_type: {
          xyk: {},
        },
      },
      // stt-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1szee0j4m8c75etfs9le9tepa4mc80t3vpf72ls",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra13sn4xx9s2k7q26xju5zy99j2n8pfhlt2a5yccx",
        liquidity_token: "terra159xnereggxkfdswssheajdkr6n569q6hffl5p6",
        pair_type: {
          xyk: {},
        },
      },
      // mine-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1lqm5tutr5xcw9d5vc4457exa3ghd4sr9mzwdex",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1hh20kjfz4yaqkyfwfd2n8ktwnr956m82r9lqd4",
        liquidity_token: "terra1neqsjj9dq6lfu6xmrsn06mrzrttax0glfa7f92",
        pair_type: {
          xyk: {},
        },
      },
      // astro-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1jqcw39c42mf7ngq4drgggakk3ymljgd3r5c3r5",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1ec0fnjk2u6mms05xyyrte44jfdgdaqnx0upesr",
        liquidity_token: "terra18zjm4scu5wqlskwafclxa9kpa9l3zrvju4vdry",
        pair_type: {
          xyk: {},
        },
      },
      // kuji-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1azu2frwn9a4l6gl5r39d0cuccs4h7xlu9gkmtd",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra178na9upyad7gu4kulym9uamwafgrf922yln76l",
        liquidity_token: "terra1mdgq0fyr69m5880q909ts598e0qlevj543shr4",
        pair_type: {
          xyk: {},
        },
      },
      // stLuna-luna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1e42d7l5z5u53n7g990ry24tltdphs9vugap8cd",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1cx2rqwsgsdhg3t9ce3kef33dncaswknemucrzf",
        liquidity_token: "terra1w50p86452w5l9xmpa67nrga4umxvp5u749cfpp",
        pair_type: {
          stable: {},
        },
      },
      // apollo-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1a0dx9xeh7sh6amn69zxg35twvdm44cghrlh87d",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1af47e4tl5gapkqr45vvxx7nygg5f9qkecjvpdm",
        liquidity_token: "terra12ekyxay62wa5zq8tcgqysw83hvtfs9qhe9j66v",
        pair_type: {
          xyk: {},
        },
      },
      // xdefi-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra186tpamwvve5c7dhymrmk2r3zz3ynnurhupd7p9",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1zyc39h9d6tjf7e84xpw0wpuhg02sfnju3my6vl",
        liquidity_token: "terra1tcctmat9yu23grgczpyeynl83echgvlc4uvzmg",
        pair_type: {
          xyk: {},
        },
      },
      // wewstETH-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1hp84qsfk6qv0x2en8hdul3370a79qk90e59a5v",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1zsvarphwyzlgjwx9xty0rezla9l7s0p5qd87pu",
        liquidity_token: "terra1mn8xw7ksu9wc38m4rnvdu9nu36ntur26gat4wj",
        pair_type: {
          xyk: {},
        },
      },
      // wsstSOL-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1lty87kmhht8hr0q5w62uszhs2sk85evwtyv6hy",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1prwpl8h63l8nex58clk25wd4zpu0rvfuz2dvh4",
        liquidity_token: "terra1pmratq75tq4wtp36sedtl3g5awm9vt4ac9udhl",
        pair_type: {
          xyk: {},
        },
      },
      // nETH-psi
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1em8dvzln8quptj9tuptf8tu73jyuv5jn6kqdwv",
            },
          },
          {
            token: {
              contract_addr: "terra18nle009rtynpjgleh2975rleu5zts0zdtqryte",
            },
          },
        ],
        contract_addr: "terra1mt63aef37fx9z7jfadtgk8a5swxlxce9pjdgvy",
        liquidity_token: "terra1dpzuan9dyp20ze7ttfv4n6vwjl9k0j9nppzq2s",
        pair_type: {
          xyk: {},
        },
      },
      // nLuna-psi
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1gzq2zd4skvnvgm2z48fdp0mxy2djmtk7sz4uhe",
            },
          },
          {
            token: {
              contract_addr: "terra18nle009rtynpjgleh2975rleu5zts0zdtqryte",
            },
          },
        ],
        contract_addr: "terra1uwf0yn9rnt7anpceqm7s00zfgevnwaaqde2eee",
        liquidity_token: "terra1kyjspjr054v00nw7g2fttk6fq9furq9wjsy0x2",
        pair_type: {
          xyk: {},
        },
      },
      // orne-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra182zp52a95r3qg6lt0njxr7l0ujkfwan5h7t3l6",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1eqzmr4gcx7vtwgcxvg86ccsaly8xqzwu0wu47u",
        liquidity_token: "terra1m29xstn4c45cud3m8e7ktggsgjvsm8p826qkez",
        pair_type: {
          xyk: {},
        },
      },
      // loca-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1j5xyaw8pjg665juf4rwgtn6wvkrvph3lzvwzer",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1vczj87j7lsjewm7mlf8j07gxjemz5gf6thq0nn",
        liquidity_token: "terra12wmfzhxem75779c5xqky72hfp27y9nup3efm5c",
        pair_type: {
          xyk: {},
        },
      },
      // ldo-stLuna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1ayee07wl7z965hw20pw75rx2ychgwv5jf5u7cn",
            },
          },
          {
            token: {
              contract_addr: "terra1e42d7l5z5u53n7g990ry24tltdphs9vugap8cd",
            },
          },
        ],
        contract_addr: "terra1y858u95ru6kawazkf7c3204wpj4xtjxfpd49rg",
        liquidity_token: "terra1yswta20vpvja93lw3r4f0xh50dpjuqjnzjrm9l",
        pair_type: {
          xyk: {},
        },
      },
      // sayve-ust
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra16t7x97wuckxm5h927jygjfrt3tcwrzh3u2rlqm",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1x23y2hxpxph6wueyqj5m5grlr23z5dt4wvpn0r",
        liquidity_token: "terra1dj3u83nfe9zpqd5r46plwmmmhe30kzr3axtx9x",
        pair_type: {
          xyk: {},
        },
      },
      // gOHM-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1qqaufxewaygpcnc7er0x02wl03f0wanz65v0ya",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1c4y6c04v575kgxpmywfqjm2mj0wq4ukjwhx7z2",
        liquidity_token: "terra1ad0pm20a0zfrrwfqn4sr8nrzhns0kyjefqrt8x",
        pair_type: {
          xyk: {},
        },
      },
      // WIW-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1hw6gee9vfmm5vga9mspc3jh0ppv7khmf2jttfw",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra17xs6alzt3msk3e7hfem9mrkx3ycjh3nm5xcpw6",
        liquidity_token: "terra1xw6xxtmuz6awhyyqclz280fwtwnvfgrsngkjkg",
        pair_type: {
          stable: {},
        },
      },
      // WIW-luna
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1hw6gee9vfmm5vga9mspc3jh0ppv7khmf2jttfw",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1z962r8fryj5rrym9gf5sz4ece6jxc0n3haayqa",
        liquidity_token: "terra1npr89peecxtq55dxddcwwgwmx672ael69l0f23",
        pair_type: {
          xyk: {},
        },
      },
      // NVL-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1fm3xjxn8k553fxqvl7vs7myr4lvjdxa7wpaqu3",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1k425ew677lm5dsvaxxg6yafnk65jjreym8j5f2",
        liquidity_token: "terra1njtk0xrc908m35hfzyu8adya0x7250emu4xt5u",
        pair_type: {
          xyk: {},
        },
      },
      // bATOM-UST
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1pw8kuxf3d7xnlsrqr39p29emwvufyr0yyjk3fg",
            },
          },
          {
            native_token: {
              denom: "uusd",
            },
          },
        ],
        contract_addr: "terra1xu2r64k7ffwqv5pzq6fxupglg5tthwr68t9lwc",
        liquidity_token: "terra1q5q8pg5e20l0pqzcjhj2qh92x3vcufje9lnltv",
        pair_type: {
          xyk: {},
        },
      },
      // STEAK-LUNA
      {
        asset_infos: [
          {
            token: {
              contract_addr: "terra1awhvtkm553rszxtvnuda4fe2r6rjjj7hjwzv0w",
            },
          },
          {
            native_token: {
              denom: "uluna",
            },
          },
        ],
        contract_addr: "terra1x3tyfme7y84mv3y6ftugllrln5y7ewhf36davz",
        liquidity_token: "terra1exla7lyc8g85szpntmcs5f2rvvg5gwwn7jekje",
        pair_type: {
          stable: {},
        },
      },
    ],
  },
};

export default whitelist;
