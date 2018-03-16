#!/usr/bin/env ruby
result = `sass sass/base-sass.scss tna-base.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('tna-base.css')
puts "Regular compile worked successfully"