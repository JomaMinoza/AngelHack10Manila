# Note: The following gems are needed to install
# gem install sinatra
# gem install chikka

require 'chikka'
require 'sinatra'

class UserVerification
  class << self
    def send_code(user)
			code = Random.rand(1001..9999)
			client = Chikka::Client.new(
				client_id: '44847a185bce3445b612252f9fefb4ede592be2e273c5c5814677e67bbe27807', 
				secret_key: 'ea54c10e0c40585175782388baf9fcba9e4a813dd78ffe880274cb04ab32ce0d',
				shortcode: '292906453'	
			)
			client.send_message(
				message: "Thank you for signing up in Commutr! Please verify using code: #{code}", 
				mobile_number: user[:mobile]
			)
			puts "Thank you for signing up in Commutr! Please verify using code: #{code}"
		end
	end
end

#Sample Command
UserVerification.send_code(mobile: '639262961769')