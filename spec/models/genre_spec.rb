require 'rails_helper'

describe Genre, type: :model do

  context "init without name" do
    it 'fails validations' do
      expect{FactoryGirl.create(:genre)}.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context "init with name" do
    it 'passes validations' do
      expect{FactoryGirl.create(:genre, name:"miaow")}.not_to raise_error
    end
  end


  context "init with name and bad url" do
    it 'fails validations' do
      expect{FactoryGirl.create(:genre, name:"miaow", image_url:"bla.doc")}.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context "init with name and bad url" do
    it 'passes validations' do
      expect{FactoryGirl.create(:genre, name:"miaow", image_url:"bla.png")}.not_to raise_error
    end
  end

end
