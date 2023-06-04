from fabric_client import Client
from fabric_ca_client import FabricCAClient

def track_juice():
  
  ca_client = FabricCAClient('url')
  wallet = ca_client.enroll('admin', 'adminpw')
  client = Client('grpc://localhost:50051', 'channel')   
  client.set_wallet(wallet)
  
  @client.event('Juice')   
  def on_juice_created(event):
    data = event.payload.decode()    
    juice = json.loads(data)     
    print(f"{juice['name']} created with batch {juice['batch']}")
      
  def create_juice(name, flavor, prod_date, expire_date, batch, barcode):
    response = client.submit_transaction('Juice', 'createJuice', 
      name, flavor, prod_date, expire_date, batch, barcode)
    return response
      
  def update_location(juice_id, new_location):
    client.submit_transaction('Juice', 'updateLocation',juice_id, new_location)  
      
  def query_juices(flavor):
    result = client.query_chaincode('Juice', 'getJuicesByFlavor', flavor)
    return result
  
# Start tracking juices    
track_juice()
