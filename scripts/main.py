import time
import requests
import json
from tqdm import tqdm

url = 'https://api-testnet.zkbnbchain.org/api/v1/blockTxs?by=block_height&value='

db = {
  'data': []
}
for i in tqdm(range(1, 392)):
    time.sleep(0.2)
    response = requests.get(f"{url}{i}")

    if response.status_code != 200:
        print(i, response.status_code)
        continue

    data = response.json()

    n = data['total']
    if n == 0:
        print('no tx!', i)
        continue

    txs = data['txs']

    for idx, tx in enumerate(txs):
        txs[idx]['id'] = tx['hash']
        txs[idx]['info'] = ''

    block = {
        'id': i,
        'numTx': n,
        'timestamp': txs[0]['created_at'],
        'txs': txs
    }

    db['data'].append(block)

with open("block_db.json", "w") as f:
    json.dump(db, f)


