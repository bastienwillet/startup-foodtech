require 'test_helper'

class StaticControllerTest < ActionDispatch::IntegrationTest
  test "Accès accueil" do
    get root_path
    assert_response :success
    assert_select "title", "Kebab Land"

  end
end
